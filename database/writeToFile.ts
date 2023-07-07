import fs from 'fs';

export const writeToFile = async (
  data: any,
  destination: string,
): Promise<void> => {
  await fs.promises.writeFile(destination, JSON.stringify(data, null, 2));
};
