import { readdir, lstat, mkdir, copyFile } from "node:fs/promises";
import path from "path";

export const copy = async () => {
  const pathToRecourseFolder = "./src/fs";
  const recourseFolder = "files";
  const targetFolder = "files_copy";
  const errorMessage = "FS operation failed";
  const recoursePath = path.join(pathToRecourseFolder, recourseFolder);
  const targetPath = path.join(pathToRecourseFolder, targetFolder);
  let folderContent;

  //for copying file and folders recursively
  const readAndCopy = async (pathToOldFolder, pathToNewFolder) => {
    const content = await readdir(pathToOldFolder);
    for (const item of content) {
      const pathToOldItem = path.join(pathToOldFolder, item);
      const pathToNewItem = path.join(pathToNewFolder, item);

      const itemInfo = await lstat(pathToOldItem);

      if (itemInfo.isFile()) {
        await copyFile(pathToOldItem, pathToNewItem);
      } else {
        //for folders
        await mkdir(pathToNewItem);
        readAndCopy(pathToOldItem, pathToNewItem);
      }
    }
  };

  try {
    try {
      await mkdir(path.join(pathToRecourseFolder, targetFolder));
      folderContent = await readdir(recoursePath);
    } catch (e) {
      throw Error(errorMessage);
    }
    readAndCopy(recoursePath, targetPath);
  } catch (e) {
    console.log(e.message);
  }
};
