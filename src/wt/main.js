import os from "os";
import { Worker } from "worker_threads";

export const performCalculations = async () => {
  let start = 10;
  const cpuCores = os.cpus().length;
  const filePath = "./src/wt/worker.js";
  const results = [];
  const workers = [];
  let remainWorkers = 0;

  for (let i = 0; i < cpuCores; i++) {
    const worker = new Worker(filePath);
    worker.on("message", (data) => {
      results.push({
        status: "resolved",
        data,
      });
      worker.terminate();
    });
    worker.on("error", (err) => {
      results.push({
        status: "error",
        data: null,
      });
    });
    worker.on("exit", (code) => {
      if (code != 0) {
        remainWorkers--;
        if (remainWorkers === 0) {
          console.log({ results });
        }
      }
    });
    workers.push(worker);
    remainWorkers = workers.length;
  }

  for (const worker of workers) {
    worker.postMessage(start++);
  }
};
