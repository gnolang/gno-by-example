import React, { FC } from 'react';
import { MarkdownComponentProps } from './markdown.types';
import { Box } from '@chakra-ui/react';
import Title from '../Title/Title';

const MarkdownHeader: FC<MarkdownComponentProps> = ({ children, ...props }) => {
  return (
    <Box my={2}>
      <Title text={children} {...props} />
    </Box>
  );
};

export default MarkdownHeader;
