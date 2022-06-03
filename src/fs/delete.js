import { unlink } from "fs";
import path from "path";

export const remove = async () => {
  const fileToRemove = "fileToRemove.txt";
  const pathToRecourseFolder = "./src/fs/files";
  const pathToFile = path.join(pathToRecourseFolder, fileToRemove);
  const errorMessage = "FS operation failed";

  try {
    unlink(pathToFile, (err) => {
      if (err) throw Error(errorMessage);
    });
  } catch (e) {
    console.log(e.message);
  }
};
