export const formatFileSize = numOfBytes => {
  return `${(numOfBytes / 1000).toFixed(2)}Kb`;
};
