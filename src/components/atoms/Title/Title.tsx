import { ITitleProps } from './title.types';
import { FC } from 'react';
import { Text, useColorMode } from '@chakra-ui/react';

const Title: FC<ITitleProps> = (props) => {
  const { text, size = '2xl' } = props;

  const { colorMode } = useColorMode();

  const color = colorMode === 'dark' ? 'white' : '#1C1C1C';

  return (
    <Text fontSize={size} as={'b'} color={color}>
      {text}
    </Text>
  );
};

export default Title;
