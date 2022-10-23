export const calcSizeChange = (prevSize, newSize) => {
  const change = Math.abs(newSize / prevSize - 1);
  const sign = prevSize > newSize ? "-" : "+";
  return `${sign}${(change * 100).toFixed(1)}%`;
};
