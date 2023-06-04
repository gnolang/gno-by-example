import { MarkdownComponentProps } from './markdown.types';
import React, { FC } from 'react';
import { Text } from '@chakra-ui/react';

const MarkdownParagraph: FC<MarkdownComponentProps> = ({
  children,
  ...props
}) => {
  return (
    <Text align="justify" {...props}>
      {children}
    </Text>
  );
};

export default MarkdownParagraph;
