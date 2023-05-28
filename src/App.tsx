import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import AppRouter from './router/AppRouter';

const App = () => {
  const config = {
    initialColorMode: 'system',
    useSystemColorMode: true
  };

  const theme = extendTheme({
    components: {
      Button: {
        variants: {
          outline: {
            _hover: {
              bg: '#F1F1F1'
            },
            _active: {
              bg: '#E1E1E1'
            }
          },
          ghost: {
            _hover: {
              bg: '#F1F1F1'
            },
            _active: {
              bg: '#E1E1E1'
            }
          }
        }
      }
    },
    config
  });

  return (
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  );
};

export default App;
