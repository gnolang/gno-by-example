import { ITitleProps } from './title.types';
import { FC } from 'react';
import { Text, useColorMode, useTheme } from '@chakra-ui/react';

const Title: FC<ITitleProps> = ({ text, size = '2xl' }) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Text
      fontSize={size}
      as={'b'}
      color={
        colorMode === 'dark' ? theme.colors.gno.light : theme.colors.gno.dark
      }
    >
      {text}
    </Text>
  );
};

export default Title;
