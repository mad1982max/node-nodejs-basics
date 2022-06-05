import zlib from "zlib";
import { createReadStream, createWriteStream } from "fs";
import path from "path";

export const compress = async () => {
  const pathToFolder = "./src/zip/files";
  const resourceFile = "fileToCompress.txt";
  const targetFile = "archive.gz";
  const pathToResourceFile = path.join(pathToFolder, resourceFile);
  const pathToTargetFile = path.join(pathToFolder, targetFile);

  const gzip = zlib.createGzip();
  const input = createReadStream(pathToResourceFile);
  const output = createWriteStream(pathToTargetFile);

  const handleError = (er) => {
    console.log(er.message);
  };

  input
    .on("error", handleError)
    .pipe(gzip)
    .on("error", handleError)
    .pipe(output)
    .on("error", handleError);
};
