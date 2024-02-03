import {
  getNextLevel,
  getNextInSequence,
  getPrevInSequence,
  processSequences,
} from '../day-09.js';

// beforeEach(() => {
//   globalThis.challengeNum = 2;
// });

// afterEach(() => {
//   delete globalThis.challengeNum;
// });

describe('getNextLevel', () => {
  it.each`
    level                | nextLevel
    ${[1, 1, 1]}         | ${[0, 0]}
    ${[1, 2, 3]}         | ${[1, 1]}
    ${[1, 3, 6, 10, 15]} | ${[2, 3, 4, 5]}
  `('$level', ({ level, nextLevel }) => {
    expect(getNextLevel(level)).toEqual(nextLevel);
  });
});

describe('getNextInSequence', () => {
  it.each`
    sequence             | next
    ${[1, 1, 1]}         | ${1}
    ${[1, 2, 3]}         | ${4}
    ${[1, 3, 6, 10, 15]} | ${21}
  `('$sequence', ({ sequence, next }) => {
    expect(getNextInSequence(sequence)).toEqual(next);
  });
});

describe('getPrevInSequence', () => {
  it.each`
    sequence             | prev
    ${[1, 1, 1]}         | ${1}
    ${[1, 2, 3]}         | ${0}
    ${[1, 3, 6, 10, 15]} | ${0}
  `('$sequence', ({ sequence, prev }) => {
    expect(getPrevInSequence(sequence)).toEqual(prev);
  });
});

describe('processSequences', () => {
  it('basic', () => {
    const input = [
      [0, 3, 6, 9, 12, 15],
      [1, 3, 6, 10, 15, 21],
      [10, 13, 16, 21, 30, 45],
    ];
    expect(processSequences(input)).toEqual([18, 28, 68]);
  });
});
