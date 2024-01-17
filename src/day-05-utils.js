// Convert seeds to locations and find the lowest location number
export function getDestination(source, mappings) {
  for (const [destStart, sourceStart, rangeLength] of mappings) {
    if (source >= sourceStart && source < sourceStart + rangeLength) {
      const offset = source - sourceStart;
      return destStart + offset;
    }
  }
  return source;
}
