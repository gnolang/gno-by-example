import { Playground, type Monaco } from '@gnoide/playground'
import React, { FC } from 'react';
import {
  useColorMode,
} from '@chakra-ui/react';

const App = ({ ...props }) => {
  const files = JSON.parse(decodeURIComponent(props.files)) 

  const { colorMode } = useColorMode();
  const isLight = colorMode === 'light';

  let theme = {
    color: "#a8a8a8",
    primaryColor: '#3a3a3a',
    secondaryColor: '#1c1c1c',
    editorBase: 'vs-dark',
  } 

  if (isLight) {
    theme = {
      color: "#606060",
      primaryColor: '#f1f1f1',
      secondaryColor: '#bebebe',
      editorBase: 'vs',
    } 
  }

  return (
    <Playground
      files={files}
      theme={theme}
      autoHeight={true}
      style={{ margin: '30px 0', borderRadius: "15px" }}
    />
  )
}

export default App
