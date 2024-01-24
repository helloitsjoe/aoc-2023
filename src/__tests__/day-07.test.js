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
    description                   | hand       | transformed
    ${'5 of a kind'}              | ${'JAAAA'} | ${'AAAAA'}
    ${'4 of a kind'}              | ${'JKAAA'} | ${'AKAAA'}
    ${'4 of a kind, J not first'} | ${'KJAAA'} | ${'KAAAA'}
    ${'3 of a kind'}              | ${'KJTAA'} | ${'KATAA'}
    ${'3 of a kind 2'}            | ${'TTJKA'} | ${'TTTKA'}
    ${'Full house high'}          | ${'KJTKT'} | ${'KKTKT'}
    ${'Full house low'}           | ${'9JT9T'} | ${'9TT9T'}
    ${'Pair'}                     | ${'9JT87'} | ${'9TT87'}
  `('$description', ({ hand, transformed }) => {
    expect(maybeJokersWild(hand)).toBe(transformed);
  });
});
