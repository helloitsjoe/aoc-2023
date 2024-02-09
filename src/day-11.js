import { parseCli } from './utils.js';

export default function main() {
  const { getData } = parseCli(process.argv);
  return getData(data);
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
