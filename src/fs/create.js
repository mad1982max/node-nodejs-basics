import { readdir, writeFile } from "node:fs/promises";

export const create = async () => {
  const pathToFolder = "./src/fs/files";
  const fileName = "fresh.txt";
  const text = "I am fresh and young";
  const errorMessage = "FS operation failed";

  try {
    const files = await readdir(pathToFolder);
    if (files.includes(fileName)) throw Error(errorMessage);
    await writeFile(`${pathToFolder}/${fileName}`, text);
    console.log(`The file '${fileName}' has been saved!`);
  } catch (e) {
    console.log(e.message);
  }
};
