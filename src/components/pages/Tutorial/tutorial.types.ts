import { IItemInfo } from '../../atoms/TutorialFooter/tutorialFooter.types';
import MarkdownHeader from '../../atoms/Markdown/MarkdownHeader';
import MarkdownParagraph from '../../atoms/Markdown/MarkdownParagraph';
import MarkdownLink from '../../atoms/Markdown/MarkdownLink';
import MarkdownCode from '../../atoms/Markdown/MarkdownCode';
import Playground from '../../atoms/Playground';

export interface ITutorialProps {}

export interface ITutorialLinks {
  prev?: IItemInfo;
  next?: IItemInfo;
}

export const markdownComponentOverrides = {
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
    component: MarkdownCode, 
  },
  a: {
    component: MarkdownLink
  },
  Playground: {
    component:  Playground,
  },
};
