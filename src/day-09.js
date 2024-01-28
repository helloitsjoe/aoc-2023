import { parseCli } from './utils.js';

export default function main() {
  const { dataType } = parseCli(process.argv);
  console.log('dataType', dataType);
  return dataType;
}
