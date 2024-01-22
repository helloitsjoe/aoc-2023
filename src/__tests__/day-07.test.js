import { maybeJokersWild } from '../day-07.js';

beforeEach(() => {
  globalThis.challengeNum = 2;
});

afterEach(() => {
  delete globalThis.challengeNum;
});

describe('maybeJokersWild', () => {
  it.each`
    hand       | transformed
    ${'AAAAA'} | ${'AAAAA'}
    ${'JAAAA'} | ${'AAAAA'}
    ${'JJAAA'} | ${'AAAAA'}
    ${'JJJAA'} | ${'AAAAA'}
    ${'JJJJA'} | ${'AAAAA'}
    ${'JJJJJ'} | ${'AAAAA'}
    ${'JJJJJ'} | ${'AAAAA'}
  `('$hand', ({ hand, transformed }) => {
    expect(maybeJokersWild(hand)).toBe(transformed);
  });
});

describe('one joker', () => {
  it.each`
    hand       | transformed
    ${'JAAAA'} | ${'AAAAA'}
    ${'JKAAA'} | ${'AKAAA'}
    ${'KJAAA'} | ${'KAAAA'}
    ${'KJTAA'} | ${'KATAA'}
    ${'TTJKA'} | ${'TTTKA'}
    ${'KJTKT'} | ${'KKTKT'}
    ${'9JT9T'} | ${'9TT9T'}
    ${'9JT87'} | ${'9TT87'}
  `('$hand', ({ hand, transformed }) => {
    expect(maybeJokersWild(hand)).toBe(transformed);
  });
});
