import { ISectionBundle } from '../../molecules/ContentTable/contentTable.types';

export interface IContentTableItemProps {
  section: ISectionBundle;

  activeSection: string;
  setActiveSection: (section: string) => void;
}
