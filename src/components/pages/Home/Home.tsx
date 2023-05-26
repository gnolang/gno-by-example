import { IHomeProps } from './home.types';
import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import ContentTable from '../../atoms/ContentTable/ContentTable';

const Home: FC<IHomeProps> = () => {
  return (
    <Box display={'flex'}>
      <ContentTable />
      <Box ml={20}>Main area</Box>
    </Box>
  );
};

export default Home;
