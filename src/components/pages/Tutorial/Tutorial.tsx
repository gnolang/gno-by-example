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
  const { sectionID, tutorialID } = useParams();
  const navigate = useNavigate();

  const [tutorial, setTutorial] = useState<TutorialData | null>(null);
  const [tutorialLinks, setTutorialLinks] = useState<ITutorialLinks>({});

  const displayToast = () => {
    toast({
      id: toastID,
      title: 'Tutorial not found',
      status: 'error',
      position: 'bottom',
      isClosable: true,
      duration: 3000
    });
  };

  useEffect(() => {
    if (!tutorialID || !sectionID) {
      navigate('/');

      return;
    }

    // Check if the section exists
    const sectionIndex = tutorials.findIndex(
      (section) => section.link === sectionID
    );

    if (sectionIndex < 0) {
      navigate('/');
      displayToast();

      return;
    }

    // Check if the tutorial exists
    const tutorialIndex = tutorials[sectionIndex].items.findIndex(
      (tutorial) => tutorial.link === tutorialID
    );

    if (tutorialIndex < 0) {
      navigate('/');
      displayToast();

      return;
    }

    const section = tutorials[sectionIndex];
    const tutorial = section.items[tutorialIndex];
    const { data: tutorialData } = tutorial;

    const links: ITutorialLinks = {};

    if (tutorialIndex > 0) {
      const previousTutorial = section.items[tutorialIndex - 1];

      links.prev = {
        link: `/tutorials/${section.link}/${previousTutorial.link}`,
        name: previousTutorial.data.metadata.title
      };
    } else if (sectionIndex > 0) {
      // Check if there is an earlier section
      const previousSection = tutorials[sectionIndex - 1];
      const tutorial = previousSection.items[previousSection.items.length - 1];

      links.prev = {
        link: `/tutorials/${previousSection.link}/${tutorial.link}`,
        name: tutorial.data.metadata.title
      };
    }

    if (tutorialIndex < section.items.length - 1) {
      const nextTutorial = section.items[tutorialIndex + 1];

      links.next = {
        link: `/tutorials/${section.link}/${nextTutorial.link}`,
        name: nextTutorial.data.metadata.title
      };
    } else if (sectionIndex < tutorials.length - 1) {
      // Check if there is a next section
      const nextSection = tutorials[sectionIndex + 1];
      const tutorial = nextSection.items[0];

      links.next = {
        link: `/tutorials/${nextSection.link}/${tutorial.link}`,
        name: tutorial.data.metadata.title
      };
    }

    setTutorial(tutorialData);
    setTutorialLinks(links);
  }, [tutorialID, sectionID, navigate]);

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
