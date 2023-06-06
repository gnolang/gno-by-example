import { ITutorialSection } from '../../pages/Home/home.types';

export interface IContentTableProps {
  sections: ISectionInfo[];

  activeSection: string;
  setActiveSection: (section: string) => void;
}

export interface ISectionInfo
  extends Pick<ITutorialSection, 'section' | 'link'> {}
