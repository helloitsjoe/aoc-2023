import { parseCli, arrayify } from './utils.js';

export function expand(arr) {
  const output = [];
  for (const line of arr) {
    if (line.every((el) => el === '.')) {
      output.push(line);
    }
    output.push(line);
  }

  return output;
}

export default function main() {
  const { getData } = parseCli(process.argv);
  const arr = arrayify(getData(data));
  return arr;
}

const data = {
  test: `
...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`,
};
