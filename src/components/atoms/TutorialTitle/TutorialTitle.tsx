import { ITutorialTitleProps } from './tutorialTitle.types';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton } from '@chakra-ui/react';
import { IoArrowBack } from 'react-icons/io5';
import Title from '../Title/Title';

const TutorialTitle: FC<ITutorialTitleProps> = ({ text }) => {
  const navigate = useNavigate();

  return (
    <Box mb={4} display={'flex'} alignItems={'center'}>
      <IconButton
        icon={<IoArrowBack />}
        aria-label="Back"
        size="md"
        variant="ghost"
        mr={4}
        onClick={() => {
          navigate('/');
        }}
      />
      <Title text={text} size={'3xl'} />
    </Box>
  );
};

export default TutorialTitle;
