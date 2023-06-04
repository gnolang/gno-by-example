import React, { FC } from 'react';
import { MarkdownComponentProps } from './markdown.types';
import { Box, Button, Tooltip, useColorMode, useToast } from '@chakra-ui/react';
import { IoCopy } from 'react-icons/io5';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  stackoverflowDark,
  stackoverflowLight
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const MarkdownCode: FC<MarkdownComponentProps> = ({ children, ...props }) => {
  const language = props.className.replace('lang-', '');

  const toast = useToast();
  const id = 'copy-toast';

  const { colorMode } = useColorMode();

  const isLight = colorMode === 'light';
  const codeWrapper = isLight ? '#F1F1F1' : '#3A3A3A';

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
            }}
          >
            Copy
          </Button>
        </Tooltip>
      </Box>
      <SyntaxHighlighter
        language={language}
        style={isLight ? stackoverflowLight : stackoverflowDark}
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
