import { readdir, access, lstat } from "node:fs/promises";
import path from "path";

export const list = async () => {
  const pathToRecourseFolder = "./src/fs";
  const recourseFolder = "files";
  const errorMessage = "FS operation failed";

  const recoursePath = path.join(pathToRecourseFolder, recourseFolder);

  try {
    try {
      await access(recoursePath);
    } catch (e) {
      throw Error(errorMessage);
    }

    const content = await readdir(recoursePath);

    //should leave only files

    //return arr with booleans values (true instead files names)
    const booleansArrWithFiles = await Promise.all(
      content.map(async (item) => {
        const pathToItem = path.join(recoursePath, item);
        const itemInfo = await lstat(pathToItem);
        return itemInfo.isFile();
      })
    );
    //return files names instead booleans(true)
    const files = content.filter((_, i) => booleansArrWithFiles[i]);
    console.log("files: ", files);
  } catch (e) {
    console.log(e.message);
  }
};
