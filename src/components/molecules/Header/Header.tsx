import IHeaderProps from './header.types';
import React, { FC } from 'react';
import { Box, Container, useMediaQuery } from '@chakra-ui/react';
import ThemeToggle from '../../atoms/ThemeToggle/ThemeToggle';
import Logo from '../../atoms/Logo/Logo';

const Header: FC<IHeaderProps> = () => {
  const [isMdOrSmaller] = useMediaQuery('(max-width: 62em)');

  return (
    <Container maxW={isMdOrSmaller ? '100vw' : '80vw'}>
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
