import { parseCli } from './utils.js';

export function getNextLevel(nums) {
  let currentRound = [];
  for (const [iKey, num] of nums.entries()) {
    const i = Number(iKey);
    if (nums[i + 1] != null) {
      currentRound.push(nums[i + 1] - num);
    }
  }
  return currentRound;
}

function assembleLevels(nums, levels = [nums]) {
  if (nums.every((num) => num === 0)) {
    return levels;
  }
  const nextLevel = getNextLevel(nums);
  return assembleLevels(nextLevel, [...levels, nextLevel]);
}

export function getNextInSequence(sequence) {
  const levels = assembleLevels(sequence);
  console.log('levels', levels);

  const lastNums = [0];
  for (const [iKey, level] of Object.entries(levels)) {
    const i = Number(iKey);
    // console.log('level', level);
    if (levels[i - 1] != null) {
      lastNums.push(levels[i - 1].at(-1) + level.at(-1));
    }
    if (i === levels.length - 1) {
      console.log('lastNums', lastNums);
      console.log(' level', level);
      return lastNums.at(-1);
    }
  }
}

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
