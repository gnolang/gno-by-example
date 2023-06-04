import { ITutorialProps } from './tutorial.types';
import * as React from 'react';
import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import Markdown from 'markdown-to-jsx';
import MarkdownParagraph from '../../atoms/Markdown/MarkdownParagraph';
import MarkdownHeader from '../../atoms/Markdown/MarkdownHeader';
import MarkdownCode from '../../atoms/Markdown/MarkdownCode';
import TutorialTitle from '../../atoms/TutorialTitle/TutorialTitle';
import TutorialFooter from '../../atoms/TutorialFooter/TutorialFooter';

const Tutorial: FC<ITutorialProps> = () => {
  // TODO change this so it's read from the generated content
  const markdownContent = '# Hello!';

  const markdownComponentOverrides = {
    h1: {
      component: MarkdownHeader,
      props: {
        size: '2xl'
      }
    },
    h2: {
      component: MarkdownHeader,
      props: {
        size: 'xl'
      }
    },
    h3: {
      component: MarkdownHeader,
      props: {
        size: 'lg'
      }
    },
    span: {
      component: MarkdownParagraph
    },
    p: {
      component: MarkdownParagraph
    },
    code: {
      component: MarkdownCode
    }
  };

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <TutorialTitle text={'Item 1'} />
      <Box display={'flex'} flexDirection={'column'}>
        <Markdown
          children={markdownContent}
          options={{
            overrides: markdownComponentOverrides
          }}
        />
        <TutorialFooter
          prev={{
            name: 'Item n-1',
            link: ''
          }}
          next={{
            name: 'Item n+1',
            link: ''
          }}
        />
      </Box>
    </Box>
  );
};

export default Tutorial;
