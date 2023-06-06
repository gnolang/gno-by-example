export interface IHomeProps {}

export interface ITutorialData {
  content: string;
  metadata: {
    title: string;
    section: string;
  }
}

export interface ITutorialSection {
  section: string;
  link: string;
  items: {
    link: string;
    data: ITutorialData;
  }[];
}