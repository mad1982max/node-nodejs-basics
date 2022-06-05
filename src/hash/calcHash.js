import crypto from "crypto";
import path from "path";
import { readFile } from "fs/promises";

export const calculateHash = async () => {
  const pathToFolder = "./src/hash/files";
  const txtFile = "fileToCalculateHashFor.txt";
  const pathToFile = path.join(pathToFolder, txtFile);

  try {
    const fileBuffer = await readFile(pathToFile);
    const hashSum = crypto.createHash("sha256");
    hashSum.update(fileBuffer);
    return hashSum.digest("hex");
  } catch (err) {
    console.log(err.message);
  }
};
