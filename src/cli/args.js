export const parseArgs = () => {
  const chunkSize = 2;
  const args = process.argv.slice(2);
  const result = [];

  while (args.length) {
    const chunk = args.splice(0, chunkSize);
    result.push(chunk);
  }

  for (const [key, value] of result) {
    console.log(`${key.slice(2)} is ${value}`);
  }
};
