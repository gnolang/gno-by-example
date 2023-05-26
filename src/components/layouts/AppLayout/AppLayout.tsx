import { IAppLayoutProps } from './appLayout.types';
import React, { FC } from 'react';
import { Box, Container, Divider } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Footer from '../../molecules/Footer/Footer';
import Header from '../../molecules/Header/Header';

const AppLayout: FC<IAppLayoutProps> = (props) => {
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
      <Divider borderColor={'#E1E1E1'} mt={'auto'} />
      <Footer />
    </Box>
  );
};

export default AppLayout;
