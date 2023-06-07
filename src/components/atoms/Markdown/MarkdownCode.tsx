import React, { FC } from 'react';
import { MarkdownComponentProps } from './markdown.types';
import {
  Box,
  Button,
  Tooltip,
  useColorMode,
  useTheme,
  useToast
} from '@chakra-ui/react';
import { IoCopy } from 'react-icons/io5';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  stackoverflowDark,
  stackoverflowLight
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const MarkdownCode: FC<MarkdownComponentProps> = ({ children, ...props }) => {
  const toast = useToast();
  const id = 'copy-toast';

  const { colorMode } = useColorMode();
  const theme = useTheme();

  const isLight = colorMode === 'light';
  const codeWrapper = isLight
    ? theme.colors.gno.grayscale1
    : theme.colors.gno.grayscale3;

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        if (!toast.isActive(id)) {
          toast({
            id,
            title: `Copied!`,
            status: 'success',
            position: 'bottom',
            isClosable: true,
            duration: 3000
          });
        }
      })
      .catch((error) => {
        console.error('Failed to copy text:', error);
      });
  };

  if (!props.className) {
    // Inline code block
    return (
      <Box
        display={'inline'}
        padding={'5px'}
        backgroundColor={codeWrapper}
        borderRadius={'5px'}
      >
        {children}
      </Box>
    );
  }

  // Get the code block language for the highlighter
  const language = props.className.replace('lang-', '');

  return (
    <Box
      display={'flex'}
      width={'100%'}
      padding={'30px'}
      backgroundColor={codeWrapper}
      borderRadius={'10px'}
      my={6}
      flexDirection={'column'}
    >
      <Box ml={'auto'} display={'flex'} alignItems={'center'}>
        <Tooltip label={'Copy to clipboard'} fontSize={'sm'}>
          <Button
            leftIcon={<IoCopy />}
            variant="ghost"
            size={'sm'}
            onClick={() => {
              copyToClipboard(children as string);
            }}
          >
            Copy
          </Button>
        </Tooltip>
      </Box>
      <SyntaxHighlighter
        language={language}
        style={isLight ? stackoverflowLight : stackoverflowDark}
        showLineNumbers
        lineNumberStyle={{
          color: theme.colors.gno.grayscale2b
        }}
        customStyle={{
          background: 'none'
        }}
      >
        {children}
      </SyntaxHighlighter>
    </Box>
  );
};

export default MarkdownCode;
