import { IAppLayoutProps } from './appLayout.types';
import React, { FC } from 'react';
import { Box, Container, Divider, useColorMode } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Footer from '../../molecules/Footer/Footer';
import Header from '../../molecules/Header/Header';

const AppLayout: FC<IAppLayoutProps> = (props) => {
  const { colorMode } = useColorMode();

  const dividerColor = colorMode === 'dark' ? '#3A3A3A' : '#E1E1E1';

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width={'100%'}
      minHeight={'100vh'}
    >
      <Header />
      <Container maxW={'80vw'} my={20}>
        <Outlet />
      </Container>
      <Divider borderColor={dividerColor} mt={'auto'} />
      <Footer />
    </Box>
  );
};

export default AppLayout;
