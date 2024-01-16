export default function main() {
  const [time, distance] = testData.split('\n').map((line) =>
    line
      .replace(/(Time|Distance)\s+/, '')
      .split(/\d+/)
      .map((i) => console.log(i)),
  );
  console.log('time, distance', time, distance);
}

const testData = `
Time:      7  15   30
Distance:  9  40  200`;
