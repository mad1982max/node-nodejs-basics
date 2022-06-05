import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import path from "path";

export const decompress = async () => {
  const pathToFolder = "./src/zip/files";
  const targetFile = "fileToCompress.txt";
  const resourceFile = "archive.gz";
  const pathToResourceFile = path.join(pathToFolder, resourceFile);
  const pathToTargetFile = path.join(pathToFolder, targetFile);

  const unzip = createUnzip();
  const input = createReadStream(pathToResourceFile);
  const output = createWriteStream(pathToTargetFile);

  const handleError = (err) => {
    console.log(err.message);
  };

  input
    .on("error", handleError)
    .pipe(unzip)
    .on("error", handleError)
    .pipe(output)
    .on("error", handleError);
};
