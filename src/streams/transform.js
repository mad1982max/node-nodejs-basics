import { Transform } from "stream";

export const transform = async () => {
  const reverseTransStream = new Transform({
    transform(chunk, encoding, cb) {
      this.push(chunk.toString().split("").reverse().join("") + "\n");
      cb();
    },
  });

  process.stdin.pipe(reverseTransStream).pipe(process.stdout);
};
