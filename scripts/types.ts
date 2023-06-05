export interface TutorialMetadata {
  title: string;
  section: string;
}

export interface TutorialData {
  metadata: TutorialMetadata;
  content: string; // parsed Markdown
}

export interface TutorialItem {
  dataPath: string;
  link: string;
}
