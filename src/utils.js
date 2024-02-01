export function parseCli(argv) {
  const [, , num, type] = argv;

  if ((!num || num === 'test') && !type) {
    return { CHALLENGE_NUM: 1, dataType: 'test' };
  }

  const CHALLENGE_NUM = Number(num || 1);

  if (isNaN(CHALLENGE_NUM)) {
    console.error('CHALLENGE_NUM must be a number');
    process.exit(1);
  }

  const dataType = argv[3] || 'test';

  return { CHALLENGE_NUM, dataType };
}

export const sum = (arr) => arr.reduce((a, c) => a + c, 0);

export const getLines = (input) => input.trim().split('\n');
