import { getStartCoords, getStartPipePair, arrayify } from '../day-10.js';

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
