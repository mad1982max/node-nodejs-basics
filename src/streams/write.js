import path from "path";
import { createWriteStream } from "fs";

export const write = async () => {
  const pathToFolder = "./src/streams/files";
  const txtFile = "fileToWrite.txt";
  const pathToFile = path.join(pathToFolder, txtFile);

  const writeStream = createWriteStream(pathToFile, { encoding: "utf8" });

  process.stdin
    .on("error", (err) => {
      console.log(err.message);
    })
    .pipe(writeStream);
};
