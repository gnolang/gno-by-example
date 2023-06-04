import { ITutorialFooter } from './tutorialFooter.types';
import { Box, Button, Divider } from '@chakra-ui/react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const TutorialFooter = ({ prev, next }: ITutorialFooter) => {
  return (
    <Box display="flex" flexDirection="column">
      <Box width="100%" my={6}>
        <Divider />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        {prev && (
          <Link to={`/${prev.link}`}>
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
          <Link to={`/${next.link}`}>
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
