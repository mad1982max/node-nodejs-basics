import { readdir, writeFile } from "node:fs/promises";
import path from "path";

export const create = async () => {
  const pathToRecourseFolder = "./src/fs";
  const recourseFolder = "files";
  const fileName = "fresh.txt";
  const text = "I am fresh and young";
  const errorMessage = "FS operation failed";

  const recoursePath = path.join(pathToRecourseFolder, recourseFolder);
  const targetPath = path.join(recoursePath, fileName);

  try {
    const files = await readdir(recoursePath);
    if (files.includes(fileName)) throw Error(errorMessage);
    await writeFile(targetPath, text);
    console.log(`The file '${fileName}' has been saved!`);
  } catch (e) {
    console.log(e.message);
  }
};
