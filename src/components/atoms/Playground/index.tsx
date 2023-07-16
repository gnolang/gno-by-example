import { Playground } from '@gnoide/playground'
import '~/@gnoide/playground/dist/style.css'
import {
  useColorMode,
  useTheme,
} from '@chakra-ui/react';

const App = ({ ...props }) => {
  const { colorMode } = useColorMode();
  const { colors }= useTheme();

  const isLight = colorMode === 'light';
  const files = JSON.parse(decodeURIComponent(props.files));

  return (
    <Playground
      open={props.open}
      files={files}
      theme={
        isLight ? {
          color: colors.gno.grayscale2b,
          primaryColor: colors.gno.grayscale1,
          secondaryColor: '#bebebe',
          editorBase: 'vs',
        } : {
          color: colors.gno.grayscale2,
          primaryColor: colors.gno.grayscale3,
          secondaryColor: colors.gno.dark,
          editorBase: 'vs-dark',
        }
      }
      autoHeight={true}
      style={{ margin: '30px 0', borderRadius: "15px" }}
    />
  )
}

export default App
