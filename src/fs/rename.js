import { access, rename as renameFile } from "fs";
import path from "path";

export const rename = async () => {
  const pathToRecourseFolder = "./src/fs/files";
  const fileToRename = "e.txt";
  const newFileName = "e.md";
  const errorMessage = "FS operation failed";

  const pathToOldFile = path.join(pathToRecourseFolder, fileToRename);
  const pathToNewFile = path.join(pathToRecourseFolder, newFileName);

  try {
    access(pathToOldFile, (err) => {
      if (err) throw Error(errorMessage);
    });
    access(pathToNewFile, (err) => {
      if (!err) throw Error(errorMessage);
    });
    renameFile(pathToOldFile, pathToNewFile, (err) => {
      if (err) throw err;
    });
  } catch (e) {
    console.log(e.message);
  }
};
