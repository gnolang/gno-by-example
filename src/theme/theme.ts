import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true
};

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode('#1C1C1C', '#A8A8A8')(props)
      })
    },
    Tooltip: {
      baseStyle: () => ({
        bg: '#A8A8A8',
        borderRadius: '5px'
      })
    },
    Button: {
      variants: {
        outline: {
          _hover: {
            bg: '#F1F1F1'
          },
          _active: {
            bg: '#E1E1E1'
          },
          _dark: {
            _hover: {
              bg: '#3A3A3A'
            },
            _active: {
              bg: '#626262'
            }
          }
        },
        ghost: {
          _hover: {
            bg: '#F1F1F1'
          },
          _active: {
            bg: '#E1E1E1'
          },
          _dark: {
            _hover: {
              bg: '#3A3A3A'
            },
            _active: {
              bg: '#626262'
            }
          }
        }
      }
    }
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('white', '#282828')(props)
      }
    })
  },
  fonts: {
    body: 'Inter, sans-serif'
  },
  colors: {
    gno: {
      light: '#FFFFFF',
      dark: '#1C1C1C',
      grayscale1: '#F1F1F1',
      grayscale1a: '#E1E1E1',
      grayscale2: '#A8A8A8',
      grayscale2a: '#989898',
      grayscale2b: '#626262',
      grayscale3: '#3A3A3A',
      grayscale4: '#282828',
      grayscale5: '#141414',
      accent1: '#3367EC'
    }
  },
  config
});

export default theme;
