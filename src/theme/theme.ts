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
    body: `'Consolas', sans-serif`
  },
  config
});

export default theme;
