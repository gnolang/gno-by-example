import { ISectionBundle } from '../ContentTable/contentTable.types';

export interface IContentTableItemProps {
  section: ISectionBundle;

  activeSection: string;
  setActiveSection: (section: string) => void;
}
