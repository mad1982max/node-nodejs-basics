import { readFile } from "fs/promises";
import path from "path";

export const read = async () => {
  const pathToFolder = "./src/fs/files";
  const fileName = "fileToRead.txt";
  const errorMessage = "FS operation failed";
  const encoding = "utf-8";
  const pathToFile = path.join(pathToFolder, fileName);

  try {
    try {
      const data = await readFile(pathToFile, encoding);
      console.log(data);
    } catch (e) {
      throw Error(errorMessage);
    }
  } catch (e) {
    console.log(e.message);
  }
};
