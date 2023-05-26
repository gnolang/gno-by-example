import { ITitleProps } from './title.types';
import { FC } from 'react';
import { Text } from '@chakra-ui/react';

const Title: FC<ITitleProps> = (props) => {
  const { text, size = '2xl' } = props;

  return (
    <Text fontSize={size} as={'b'}>
      {text}
    </Text>
  );
};

export default Title;
