import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import AppRouter from './router/AppRouter';

const App = () => {
  const config = {
    initialColorMode: 'system',
    useSystemColorMode: true
  };

  const theme = extendTheme({ config });

  return (
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  );
};

export default App;
