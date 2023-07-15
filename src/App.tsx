import { ChakraProvider } from '@chakra-ui/react';
import AppRouter from './router/AppRouter';
import theme from './theme/theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  );
};

export default App;
