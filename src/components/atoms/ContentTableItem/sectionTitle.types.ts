import { ISectionInfo } from '../../molecules/ContentTable/contentTable.types';

export interface ISectionTitleProps {
  sectionInfo: ISectionInfo;
  handleToggle: (sectionID: string) => void;
}
