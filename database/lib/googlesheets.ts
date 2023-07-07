import { google } from 'googleapis';
import dotenv from 'dotenv';
import { Section, Topic } from '@/types/structures';
import { Sheets } from './sheets';
dotenv.config();

export const getData = async (sheet: Sheets): Promise<any[]> => {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      '',
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target,
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: sheet, // sheet name
    });

    const rows = response.data.values;
    if (rows && rows.length) {
      return rows.slice(2).map(row => {
        switch (sheet) {
          case Sheets.TOPIC:
            return {
              ID_TOPIC: row[0] || '',
              TOPIC: row[1] || '',
            } as Topic;
          case Sheets.SECTION:
            return {
              ID_SECTION: row[0] || '',
              SECTION: row[1] || '',
              ID_TOPIC: row[2] || '',
              TOPIC: row[3] || '',
            } as Section;
          case Sheets.CHAPTER:
            return {
              ID_CHAPTER: row[0] || '',
              CHAPTER: row[1] || '',
              ID_SECTION: row[2] || '',
              SECTION: row[3] || '',
              ID_TOPIC: row[4] || '',
              TOPIC: row[5] || '',
            };
          case Sheets.ARTICLE:
            return {
              ID_ARTICLE: row[0] || '',
              ARTICLE: row[1] || '',
              ID_CHAPTER: row[2] || '',
              CHAPTER: row[3] || '',
              ID_SECTION: row[4] || '',
              SECTION: row[5] || '',
              ID_TOPIC: row[6] || '',
              TOPIC: row[7] || '',
            };
          case Sheets.PARAGRAPH:
            return {
              ID_PARAGRAPH: row[0] || '',
              PARAGRAPH: row[1] || '',
              ID_ARTICLE: row[2] || '',
              ARTICLE: row[3] || '',
              ID_CHAPTER: row[4] || '',
              CHAPTER: row[5] || '',
              ID_SECTION: row[6] || '',
              SECTION: row[7] || '',
              ID_TOPIC: row[8] || '',
              TOPIC: row[9] || '',
            };
          case Sheets.NUMERAL:
            return {
              ID_NUMERAL: row[0] || '',
              NUMERAL: row[1] || '',
              ID_PARAGRAPH: row[2] || '',
              PARAGRAPH: row[3] || '',
              ID_ARTICLE: row[4] || '',
              ARTICLE: row[5] || '',
              ID_CHAPTER: row[6] || '',
              CHAPTER: row[7] || '',
              ID_SECTION: row[8] || '',
              SECTION: row[9] || '',
              ID_TOPIC: row[10] || '',
              TOPIC: row[11] || '',
            };
          case Sheets.CONTENT:
            return {
              ID_CONTENT: row[0] || '',
              CONTENT: row[1] || '',
              ID_NUMERAL: row[2] || '',
              NUMERAL: row[3] || '',
              ID_PARAGRAPH: row[4] || '',
              PARAGRAPH: row[5] || '',
              ID_ARTICLE: row[6] || '',
              ARTICLE: row[7] || '',
              ID_CHAPTER: row[8] || '',
              CHAPTER: row[9] || '',
              ID_SECTION: row[10] || '',
              SECTION: row[11] || '',
              ID_TOPIC: row[12] || '',
              TOPIC: row[13] || '',
            };
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
  return [];
};
