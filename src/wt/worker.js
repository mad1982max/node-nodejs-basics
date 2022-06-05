import { parentPort } from "worker_threads";

export const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

export const sendResult = (() => {
  parentPort.on("message", (data) => {
    const result = nthFibonacci(data);
    console.log(`in worker: ${data}nthFibonacci is ${result}`);
    parentPort.postMessage(result);
  });
})();
