import main from './src/day-07.js';

(async () => {
  const start = Date.now();
  const result = await main();
  if (process.env.TIME) {
    console.log(`Completed in ${Date.now() - start} ms`);
  }
  console.log(result);
})();
