import {
  getStartCoords,
  getStartPipePair,
  getPrevDir,
  getMax,
  arrayify,
} from '../day-10.js';

describe('getStartCoords', () => {
  it('basic', () => {
    const input = `
7-F7-
.FJ|7
SJLL7
|F--J
LJ.LJ`;
    expect(getStartCoords(arrayify(input))).toEqual({ x: 0, y: 2 });
  });

  it('another', () => {
    const input = `
-L|F7
7S-7|
L|7||
-L-J|
L|-JF`;
    expect(getStartCoords(arrayify(input))).toEqual({ x: 1, y: 1 });
  });
});

describe('getStartPipePair', () => {
  it('basic', () => {
    const input = `
-L|
7S-
L|7
`;
    const arr = arrayify(input);
    expect(getStartPipePair(arr, getStartCoords(arr))).toEqual([
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ]);
  });

  it('another', () => {
    const input = `
.F
SJ
|F
`;
    const arr = arrayify(input);
    expect(getStartPipePair(arr, getStartCoords(arr))).toEqual([
      { x: 0, y: 2 },
      { x: 1, y: 1 },
    ]);
  });
});

describe('getPrevDir', () => {
  it('returns 0 when coming from south or west', () => {
    expect(getPrevDir({ x: 0, y: 1 }, { x: 0, y: 0 })).toBe(0); // S
    expect(getPrevDir({ x: 0, y: 0 }, { x: 1, y: 0 })).toBe(0); // W
  });

  it('returns 1 when coming from north or east', () => {
    expect(getPrevDir({ x: 0, y: 0 }, { x: 0, y: 1 })).toBe(1);
    expect(getPrevDir({ x: 1, y: 0 }, { x: 0, y: 0 })).toBe(1);
  });
});

describe('getMax', () => {
  fit('works', () => {
    // const input = `
    // 7-F7-
    // .FJ|7
    // SJLL7
    // |F--J
    // LJ.LJ`;
    const input = `
.....
.S-7.
.|.|.
.L-J.
.....`;
    const pipes = arrayify(input);
    const startCoords = getStartCoords(pipes);
    const startPipePair = getStartPipePair(pipes, startCoords);
    expect(getMax(startPipePair, startCoords, pipes)).toBe(4);
  });
});
