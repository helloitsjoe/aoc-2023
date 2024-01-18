import { parseCli } from './utils.js';

export default function main() {
  const { CHALLENGE_NUM, dataType } = parseCli(process.argv);

  let [, times, distances] = data[dataType].split('\n').map((line) =>
    line
      .replace(/(Time|Distance):\s+/, '')
      .split(/\s+/)
      .map((i) => Number(i)),
  );

  if (CHALLENGE_NUM === 2) {
    times = [Number(times.join(''))];
    distances = [Number(distances.join(''))];
  }

  console.log('time, distance', times, distances);

  const allWaysToWin = [];

  for (const [timeIdx, time] of times.entries()) {
    // Time held = distance per ms
    const iterations = [];
    for (let i = 0; i < time; i++) {
      const value = i * (time - i);
      if (value > distances[timeIdx]) {
        iterations.push(value);
      }
    }
    allWaysToWin.push(iterations.length);
  }

  return allWaysToWin.reduce((a, c) => a * c, 1);
}

const data = {
  test: `
Time:      7  15   30
Distance:  9  40  200`,
  final: `
Time:        46     80     78     66
Distance:   214   1177   1402   1024`,
};
