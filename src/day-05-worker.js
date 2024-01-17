import { parentPort, workerData } from 'worker_threads';
import { getDestination } from './day-05-utils.js';

const { seedStart, seedRange, mapGroups } = workerData;

let min = Infinity;

for (let i = 0; i < seedRange; i++) {
  const dest = mapGroups.reduce((source, group) => {
    return getDestination(source, group);
  }, seedStart + i);
  // console.log('dest', dest);

  if (dest < min) {
    min = dest;
  }
}
// console.log('done');

parentPort.postMessage(min);
