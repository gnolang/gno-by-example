import IHeaderProps from './header.types';
import React, { FC } from 'react';
import { Box, Container, Image, Switch } from '@chakra-ui/react';
import gnolandBlack from '../../../assets/img/gnolandBlack.png';
import { Link } from 'react-router-dom';

const Header: FC<IHeaderProps> = () => {
  return (
    <Container maxW={'80vw'}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mt={10}
      >
        <Box>
          <Link to={'/'}>
            <Image src={gnolandBlack} height={'auto'} width={'150px'} />
          </Link>
        </Box>
        <Box>
          <Switch size={'lg'} />
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
