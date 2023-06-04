import { ITutorialTitleProps } from './tutorialTitle.types';
import * as React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton } from '@chakra-ui/react';
import { IoArrowBack } from 'react-icons/io5';
import Title from '../Title/Title';

const TutorialTitle: FC<ITutorialTitleProps> = (props) => {
  const { text } = props;

  return (
    <Box mb={4} display={'flex'} alignItems={'center'}>
      <Link to={'/'}>
        <IconButton
          icon={<IoArrowBack />}
          aria-label="Back"
          size="md"
          variant="ghost"
          mr={4}
        />
      </Link>
      <Title text={text} size={'3xl'} />
    </Box>
  );
};

export default TutorialTitle;
