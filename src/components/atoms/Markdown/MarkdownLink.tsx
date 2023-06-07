import React, { FC } from 'react';
import { MarkdownComponentProps } from './markdown.types';
import { Link, useTheme } from '@chakra-ui/react';

const MarkdownLink: FC<MarkdownComponentProps> = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <Link
      {...props}
      isExternal
      color={theme.colors.gno.accent1}
      _hover={{
        textDecoration: 'underline'
      }}
    >
      {children}
    </Link>
  );
};

export default MarkdownLink;
