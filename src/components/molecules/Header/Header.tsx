import IHeaderProps from './header.types';
import React, { FC } from 'react';
import { Box, Container } from '@chakra-ui/react';
import ThemeToggle from '../../atoms/ThemeToggle/ThemeToggle';
import Logo from '../../atoms/Logo/Logo';

const Header: FC<IHeaderProps> = () => {
  return (
    <Container maxW={'80vw'}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mt={10}
      >
        <Logo />
        <ThemeToggle />
      </Box>
    </Container>
  );
};

export default Header;
