import {
  ITutorialLinks,
  ITutorialProps,
  markdownComponentOverrides
} from './tutorial.types';
import { FC, useEffect, useState } from 'react';
import { Box, Spinner, useToast } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import tutorials from '../../../tutorials';
import { TutorialData } from '../../../../scripts/types';
import TutorialTitle from '../../atoms/TutorialTitle/TutorialTitle';
import Markdown from 'markdown-to-jsx';
import TutorialFooter from '../../atoms/TutorialFooter/TutorialFooter';

const Tutorial: FC<ITutorialProps> = () => {
  const toast = useToast();
  const toastID: string = 'not-found-id';
  const { tutorialID } = useParams();
  const navigate = useNavigate();

  const [tutorial, setTutorial] = useState<TutorialData | null>(null);
  const [tutorialLinks, setTutorialLinks] = useState<ITutorialLinks>({});

  useEffect(() => {
    if (!tutorialID) {
      navigate('/');

      return;
    }

    const tutorialIndex = tutorials.findIndex(
      (item) => item.link === tutorialID
    );

    if (tutorialIndex < 0) {
      navigate('/');
      toast({
        id: toastID,
        title: 'Tutorial not found',
        status: 'error',
        position: 'bottom',
        isClosable: true,
        duration: 3000
      });

      return;
    }

    const tutorial = tutorials[tutorialIndex];
    const tutorialData = tutorial.data;

    const links: ITutorialLinks = {};

    if (tutorialIndex > 0) {
      const previous = tutorials[tutorialIndex - 1];
      links.prev = {
        link: `/tutorials/${previous.link}`,
        name: previous.data.metadata.title
      };
    }

    if (tutorialIndex < tutorials.length - 1) {
      const next = tutorials[tutorialIndex + 1];
      links.next = {
        link: `/tutorials/${next.link}`,
        name: next.data.metadata.title
      };
    }

    setTutorial(tutorialData);
    setTutorialLinks(links);
  }, [tutorialID, navigate, toast, toastID]);

  if (!tutorial) {
    return (
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Spinner size={'xl'} />
      </Box>
    );
  }

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <TutorialTitle text={tutorial.metadata.title} />
      <Box display={'flex'} flexDirection={'column'}>
        <Markdown
          children={tutorial.content}
          options={{
            overrides: markdownComponentOverrides
          }}
        />
        <TutorialFooter prev={tutorialLinks.prev} next={tutorialLinks.next} />
      </Box>
    </Box>
  );
};

export default Tutorial;
