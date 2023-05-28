import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Image, useColorMode } from '@chakra-ui/react';
import gnolandBlack from '../../../assets/img/gnolandBlack.png';
import gnolandWhite from '../../../assets/img/gnolandWhite.png';
import { ILogoProps } from './logo.types';

const Logo: FC<ILogoProps> = () => {
  const { colorMode } = useColorMode();

  const image = colorMode === 'dark' ? gnolandWhite : gnolandBlack;

  return (
    <Link to={'/'}>
      <Image src={image} height={'auto'} width={'150px'} />
    </Link>
  );
};

export default Logo;
