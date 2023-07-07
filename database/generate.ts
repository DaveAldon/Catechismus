import {
  Article,
  Chapter,
  Content,
  Numeral,
  Paragraph,
  Section,
  Topic,
} from '@/types/structures';
import { Sheets } from './lib/sheets';
import { getData } from './lib/googlesheets';

export const generateTopics = async () => {
  const data = await getData(Sheets.TOPIC);
  const parsedData: Topic[] = [];

  data.map((row: Topic) => {
    if (
      row.ID_TOPIC !== '' &&
      row.TOPIC !== '' &&
      row !== undefined &&
      row !== null
    ) {
      parsedData.push(row);
    }
  });
  return JSON.parse(JSON.stringify(parsedData));
};

export const generateSections = async () => {
  const data = await getData(Sheets.SECTION);
  const parsedData: Section[] = [];

  data.map((row: Section) => {
    if (
      row.ID_SECTION !== '' &&
      row.SECTION !== '' &&
      row.ID_TOPIC !== '' &&
      row.TOPIC !== '' &&
      row !== undefined &&
      row !== null
    ) {
      parsedData.push(row);
    }
  });
  return JSON.parse(JSON.stringify(parsedData));
};

export const generateChapters = async () => {
  const data = await getData(Sheets.CHAPTER);
  const parsedData: Chapter[] = [];

  data.map((row: Chapter) => {
    if (
      row.ID_CHAPTER !== '' &&
      row.CHAPTER !== '' &&
      row.ID_SECTION !== '' &&
      row.SECTION !== '' &&
      row.ID_TOPIC !== '' &&
      row.TOPIC !== '' &&
      row !== undefined &&
      row !== null
    ) {
      parsedData.push(row);
    }
  });
  return JSON.parse(JSON.stringify(parsedData));
};

export const generateArticles = async () => {
  const data = await getData(Sheets.ARTICLE);
  const parsedData: Article[] = [];

  data.map((row: Article) => {
    if (
      row.ID_ARTICLE !== '' &&
      row.ARTICLE !== '' &&
      row.ID_CHAPTER !== '' &&
      row.CHAPTER !== '' &&
      row.ID_SECTION !== '' &&
      row.SECTION !== '' &&
      row.ID_TOPIC !== '' &&
      row.TOPIC !== '' &&
      row !== undefined &&
      row !== null
    ) {
      parsedData.push(row);
    }
  });
  return JSON.parse(JSON.stringify(parsedData));
};

export const generateParagraphs = async () => {
  const data = await getData(Sheets.PARAGRAPH);
  const parsedData: Paragraph[] = [];

  data.map((row: Paragraph) => {
    if (
      row.ID_PARAGRAPH !== '' &&
      row.PARAGRAPH !== '' &&
      row.ID_ARTICLE !== '' &&
      row.ARTICLE !== '' &&
      row.ID_CHAPTER !== '' &&
      row.CHAPTER !== '' &&
      row.ID_SECTION !== '' &&
      row.SECTION !== '' &&
      row.ID_TOPIC !== '' &&
      row.TOPIC !== '' &&
      row !== undefined &&
      row !== null
    ) {
      parsedData.push(row);
    }
  });
  return JSON.parse(JSON.stringify(parsedData));
};

export const generateNumerals = async () => {
  const data = await getData(Sheets.NUMERAL);
  const parsedData: Numeral[] = [];

  data.map((row: Numeral) => {
    if (
      row.ID_NUMERAL !== '' &&
      row.NUMERAL !== '' &&
      row.ID_PARAGRAPH !== '' &&
      row.PARAGRAPH !== '' &&
      row.ID_ARTICLE !== '' &&
      row.ARTICLE !== '' &&
      row.ID_CHAPTER !== '' &&
      row.CHAPTER !== '' &&
      row.ID_SECTION !== '' &&
      row.SECTION !== '' &&
      row.ID_TOPIC !== '' &&
      row.TOPIC !== '' &&
      row !== undefined &&
      row !== null
    ) {
      const parsedRow = {
        ...row,
        NUMERAL: row.NUMERAL.trim(),
      };
      parsedData.push(parsedRow);
    }
  });
  return JSON.parse(JSON.stringify(parsedData));
};

export const generateContent = async () => {
  const data = await getData(Sheets.CONTENT);
  const parsedData: Content[] = [];

  data.map((row: Content) => {
    if (
      row.ID_CONTENT !== '' &&
      row.CONTENT !== '' &&
      row.ID_NUMERAL !== '' &&
      row.NUMERAL !== '' &&
      row.ID_PARAGRAPH !== '' &&
      row.PARAGRAPH !== '' &&
      row.ID_ARTICLE !== '' &&
      row.ARTICLE !== '' &&
      row.ID_CHAPTER !== '' &&
      row.CHAPTER !== '' &&
      row.ID_SECTION !== '' &&
      row.SECTION !== '' &&
      row.ID_TOPIC !== '' &&
      row.TOPIC !== '' &&
      row !== undefined &&
      row !== null
    ) {
      const parsedRow = {
        ...row,
        NUMERAL: row.NUMERAL.trim(),
      };
      parsedData.push(parsedRow);
    }
  });
  return JSON.parse(JSON.stringify(parsedData));
};
