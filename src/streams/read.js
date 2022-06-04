import { createReadStream } from "fs";
import path from "path";

export const read = async () => {
  const pathToFolder = "./src/streams/files";
  const txtFile = "fileToRead.txt";
  const pathToFile = path.join(pathToFolder, txtFile);

  const readableStream = createReadStream(pathToFile, { encoding: "utf8" });

  readableStream
    .on("error", function (error) {
      console.log(`error: ${error.message}`);
    })
    .pipe(process.stdout);
};
