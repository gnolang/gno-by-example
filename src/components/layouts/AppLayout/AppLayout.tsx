import { IAppLayoutProps } from './appLayout.types';
import React, { FC } from 'react';
import {
  Box,
  Container,
  Divider,
  useColorMode,
  useMediaQuery,
  useTheme
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Footer from '../../molecules/Footer/Footer';
import Header from '../../molecules/Header/Header';

const AppLayout: FC<IAppLayoutProps> = (props) => {
  const [isMdOrSmaller] = useMediaQuery('(max-width: 62em)');

  const { colorMode } = useColorMode();
  const theme = useTheme();

  const dividerColor =
    colorMode === 'dark'
      ? theme.colors.gno.grayscale3
      : theme.colors.gno.grayscale1a;

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width={'100%'}
      minHeight={'100vh'}
    >
      <Header />
      <Container maxW={isMdOrSmaller ? '100vw' : '80vw'} my={20}>
        <Outlet />
      </Container>
      <Divider borderColor={dividerColor} mt={'auto'} />
      <Footer />
    </Box>
  );
};

export default AppLayout;
