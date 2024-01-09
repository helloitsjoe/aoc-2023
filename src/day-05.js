// const CHALLENGE_NUM = 1;

// Convert seeds to locations and find the lowest location number

export default function main() {
  const [seedLine, ...rest] = testData.split('\n\n');
  const seeds = seedLine.replace('seeds: ', '').split(' ').map(Number);
  const foo = rest.map((group) =>
    group
      .split('\n')
      .filter((line) => /\d+/.test(line))
      .map((line) => line.split(' ').map(Number)),
  );
  return [seeds].concat(foo);
}

// Each map has: 1. Destination range start, 2. Source range start, 3. Range length
// Unmapped numbers map 1-to-1 from source to dest
const testData = `
seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`;
