import { parseCli } from './utils.js';

// Part 1: Find the sum of all lines' next number
export default function main() {
  const { dataType } = parseCli(process.argv);
  const nums = data[dataType]
    .trim()
    .split('\n')
    .map((l) => l.split(' ').map((n) => parseInt(n, 10)));
  return nums;
}

const data = {
  test: `
0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`,
  final: ``,
};
