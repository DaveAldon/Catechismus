export interface CollapseStyle {
  color?: string;
}

export interface CollapseParentType extends CollapseStyle {
  backgroundColor?: string;
  title: string;
  part?: number;
  subtitle?: string;
  sections: CollapseSectionType[];
}

export interface CollapseSectionType extends CollapseStyle {
  sectionTitle: string;
  verseRange?: number[];
  sectionDescription?: string;
  chapters?: CollapseChapterType[];
}

export interface CollapseChapterType extends CollapseStyle {
  chapterTitle: string;
  chapterDescription?: string;
  verseRange?: number[];
  isCollapsable?: boolean;
  articles?: CollapseArticleType[];
}

export interface CollapseArticleType extends CollapseStyle {
  articleTitle: string;
  articleSections: CollapseParagraphType[];
  verseRange?: number[];
}

export interface CollapseParagraphType extends CollapseStyle {
  paragraphTitle: string;
  romanNumber: string;
  verseRange?: number[];
}
