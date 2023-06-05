// Generates an import name from the tutorial link (route).
// Tutorial routes are in the format "name-second-part", and this would normalize
// the import to be "nameSecondPart"
export const generateImportFromLink = (link: string): string => {
  const words = link.split('-');

  const processedWords = words.map((word, index) => {
    if (index > 0) {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);

      return `${firstLetter}${restOfWord}`;
    }

    return word;
  });

  return processedWords.join('');
};

// Constructs the tutorial link (route)
export const constructLink = (input: string): string => {
  const trimmedInput = input.trim();
  const replacedSpaces = trimmedInput.replace(/\s+/g, '-');

  return replacedSpaces.toLowerCase();
};
