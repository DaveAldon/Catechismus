import fsPromises from 'fs/promises';
import path from 'path';
import { SheetPaths } from './lib/sheets';

export const getJsonData = async (sheet: SheetPaths) => {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), `./public/${sheet}`);
  // Read the json file with utf-8 encoding
  const jsonData = await fsPromises.readFile(filePath, 'utf-8');
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData;
};
