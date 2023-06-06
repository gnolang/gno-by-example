import fs from 'fs';
import yaml from 'yaml';
import path from 'path';
import { SectionData, TutorialItem, TutorialMetadata } from './types';
import prettier from 'prettier';
import { constructLink, generateImportFromLink } from './utility';

// Extracts the single tutorial metadata
const extractMetadata = (content: string): TutorialMetadata | null => {
  const marker: string = '---';

  const startIndex: number = content.indexOf(marker);
  const endIndex: number = content.indexOf(marker, startIndex + marker.length);

  if (startIndex === -1 || endIndex === -1) {
    // Invalid metadata section
    return null;
  }

  try {
    const yamlObject = yaml.parse(
      content.substring(startIndex + marker.length, endIndex).trim()
    );

    const { title, section } = yamlObject;

    return {
      title,
      section
    };
  } catch (error) {
    console.error('❌ Error parsing metadata YAML:', error);

    return null;
  }
};

// Parses the .md files in the given directory, and generates
// corresponding Typescript exports
const parseTutorial = (directory: string): TutorialItem => {
  // Find the root .md file in the directory (should be only one)
  const mdFiles = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith('.md'));
  if (mdFiles.length !== 1) {
    console.log('There should be only one .md file in the directory');

    return;
  }

  const mdFilePath = path.join(directory, mdFiles[0]);
  let mdContent = fs.readFileSync(mdFilePath, 'utf-8');

  // Extract the tutorial metadata
  const metadata: TutorialMetadata | null = extractMetadata(mdContent);
  if (!metadata) {
    console.error(`❌ Invalid metadata for markdown ${mdFilePath}`);

    return;
  }

  // Find all the code segments
  const codeReferences = mdContent.match(/```([\s\S]+?)```/g) || [];

  // For each code segment, check if there needs to be
  // some embedding done
  for (const codeRef of codeReferences) {
    const filePathMatch = codeRef.match(/file=([^#\s]+)/);
    if (!filePathMatch) {
      continue;
    }

    const filePath = filePathMatch[1];
    const codeFilePath = path.join(directory, filePath);
    const codeContent = fs.readFileSync(codeFilePath, 'utf-8');

    // Find the code segment language
    const languageMatch = codeRef.match(/```(\w+)/);
    const language = languageMatch ? languageMatch[1] : 'go';

    let embeddedCodeBlock = '';

    // Check if there are any specific code segments that need embedding
    if (/#L\d+-L\d+/.test(codeRef)) {
      const [startLine, endLine] =
        codeRef
          .match(/L(\d+)-L(\d+)/)
          ?.slice(1)
          .map(Number) || [];
      if (!startLine || !endLine) {
        continue;
      }

      const lines = codeContent.split('\n');
      if (
        startLine <= 0 ||
        startLine > lines.length ||
        endLine <= 0 ||
        endLine > lines.length
      ) {
        continue;
      }

      embeddedCodeBlock =
        '```' +
        language +
        '\n' +
        lines.slice(startLine - 1, endLine).join('\n') +
        '\n```';
    } else {
      embeddedCodeBlock = '```' + language + '\n' + codeContent + '\n```';
    }

    mdContent = mdContent.replace(codeRef, embeddedCodeBlock);
  }

  // Make sure to escape the code block backticks
  mdContent = mdContent.replace(/```(?!.*```)/g, '\\`\\`\\`');

  // Make sure to escape all other backticks
  mdContent = mdContent.replace(/([^\\])`/g, '$1\\`');

  // Make sure to drop the metadata section
  mdContent = mdContent.replace(/---[\s\S]*?---/, '');

  const tsFilePath = path.join(directory, 'index.ts');
  let output: string = `const markdownContent: string = \n\`${mdContent}\`;\n`;

  output += `
  const title: string = "${metadata.title}";\n
  const section: string = "${metadata.section}";\n
  `;

  output += `const tutorialData = {
    content: markdownContent,
    metadata: {
      title,
      section,
    },
  };\n\n`;
  output += `export default tutorialData;\n`;

  // Generate the index.ts
  fs.writeFileSync(tsFilePath, prettier.format(output, { parser: 'babel' }));

  return {
    dataPath:
      './' +
      path.relative('./src', path.resolve(tsFilePath)).replace(/\.ts/g, ''),
    link: constructLink(metadata.title),
    section: metadata.section
  };
};

// Generates tutorial routes file based on the tutorial list
const generateTutorialRoutes = (items: TutorialItem[], outputFile: string) => {
  let output = '';

  items.forEach((item: TutorialItem) => {
    const importItem = generateImportFromLink(item.link);
    output += `import ${importItem} from "${item.dataPath}";\n`;
  });

  output += '\n';

  // Sort the tutorials into section buckets
  const sectionsMap: { [section: string]: SectionData } = {};

  for (const tutorial of items) {
    const { section } = tutorial;

    if (!sectionsMap[section]) {
      sectionsMap[section] = {
        section,
        link: constructLink(section),
        items: []
      };
    }

    sectionsMap[section].items.push(tutorial);
  }

  const sections: SectionData[] = Object.values(sectionsMap);

  // Parse the sections to generate a routes object
  const sectionsArrayLiteral = sections
    .map((sectionData: SectionData) => {
      const itemsLiteral = sectionData.items
        .map(
          (item: TutorialItem) => `{
            link: "${item.link}",
            data: ${generateImportFromLink(item.link)},
          }`
        )
        .join(',\n');

      return `{
        section: "${sectionData.section}",
        link: "${sectionData.link}",
        items: [
          ${itemsLiteral}
        ],
      }`;
    })
    .join(',\n');

  output += `const tutorials = [
    ${sectionsArrayLiteral}
  ];\n\n`;

  output += 'export default tutorials;\n';

  try {
    const formattedOutput = prettier.format(output, { parser: 'babel' });
    fs.writeFileSync(outputFile, formattedOutput);

    console.log(
      `\n✅ Tutorial routes generated successfully in ${outputFile}!\n`
    );
  } catch (error) {
    console.error('❌ Error occurred while generating tutorial routes:', error);
  }
};

// Generate the corresponding tutorials in the subdirectories
// and write out the tutorial routes
const generateTutorials = () => {
  const baseDir: string = './src/tutorials/gno.land/gbe';
  // const baseDir: string = './scripts/dummy';
  const subDirs: string[] = fs.readdirSync(baseDir);
  const tutorialItems: TutorialItem[] = [];

  subDirs.forEach((subDir: string) => {
    const subDirPath: string = path.join(baseDir, subDir);
    const isDirectory: boolean = fs.statSync(subDirPath).isDirectory();

    if (isDirectory) {
      // Generate the tutorial for this subdirectory
      tutorialItems.push(parseTutorial(subDirPath));
      console.log(`✅ Generated tutorial for: ${subDirPath}`);
    }
  });

  generateTutorialRoutes(tutorialItems, './src/tutorials.ts');
};

// Generate the tutorials
// and corresponding tutorial routes
generateTutorials();
