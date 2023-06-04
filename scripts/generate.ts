import fs from 'fs';
import path from 'path';

// Parses the .md files in the given directory, and generates
// corresponding Typescript exports
function parseMDFiles(directory: string) {
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

  // Make sure to escape the backticks
  mdContent = mdContent.replace(/```(?!.*```)/g, '\\`\\`\\`');

  const tsFilePath = path.join(directory, 'index.ts');
  const tsContent = `export const markdownContent = \n\`${mdContent}\`;\n`;

  fs.writeFileSync(tsFilePath, tsContent);

  console.log('Parsing completed');
}

parseMDFiles('/Users/zmilos/Work/gno-by-example/src/components/pages/Tutorial')