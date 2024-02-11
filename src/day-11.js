import { parseCli, arrayify } from './utils.js';

export function expand(arr) {
  const output = [];

  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0][i] === '.') {
      let allDots = true;
      for (const line of arr) {
        if (line[i] !== '.') {
          allDots = false;
          break;
        }
      }
      if (allDots) {
        // Push an extra column
        for (const line of arr) {
          line.splice(i, 0, '.');
        }
        i++;
      }
    }
  }

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
