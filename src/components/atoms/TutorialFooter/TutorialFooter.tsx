import { ITutorialFooterProps } from './tutorialFooter.types';
import { Box, Button, Divider } from '@chakra-ui/react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { FC } from 'react';

const TutorialFooter: FC<ITutorialFooterProps> = ({ prev, next }) => {
  return (
    <Box display="flex" flexDirection="column">
      <Divider my={6} />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        {prev && (
          <Link to={prev.link}>
            <Button
              leftIcon={<HiChevronDoubleLeft />}
              variant="outline"
              padding={6}
            >
              {prev.name}
            </Button>
          </Link>
        )}
        {next && (
          <Link to={next.link}>
            <Button
              rightIcon={<HiChevronDoubleRight />}
              variant="outline"
              padding={6}
            >
              {next.name}
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default TutorialFooter;
