export interface Topic {
  ID_TOPIC: string;
  TOPIC: string;
}

export interface Section extends Topic {
  ID_SECTION: string;
  SECTION: string;
}

export interface Chapter extends Section {
  ID_CHAPTER: string;
  CHAPTER: string;
}

export interface Article extends Chapter {
  ID_ARTICLE: string;
  ARTICLE: string;
}

export interface Paragraph extends Article {
  ID_PARAGRAPH: string;
  PARAGRAPH: string;
}

export interface Numeral extends Paragraph {
  ID_NUMERAL: string;
  NUMERAL: string;
}

export interface Content extends Numeral {
  ID_CONTENT: string;
  CONTENT: string;
}

export interface ToCTopic extends Topic {
  sections: ToCSection[];
  verseRange: number[];
  backgroundColor?: string;
  color?: string;
  part?: number;
}

export interface ToCSection extends Section {
  chapters: ToCChapter[];
  verseRange: number[];
  color?: string;
}

export interface ToCChapter extends Chapter {
  articles: ToCArticle[];
  verseRange: number[];
  isCollapsable?: boolean;
  color?: string;
}

export interface ToCArticle extends Article {
  paragraphs: ToCParagraph[];
  verseRange: number[];
  color?: string;
}

export interface ToCParagraph extends Paragraph {
  verseRange: number[];
  color?: string;
}
