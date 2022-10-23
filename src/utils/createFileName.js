export const createFileName = file => {
  const { name, type, quality } = file;

  // e.g. filename.ext
  const indexOfLastDot = name.lastIndexOf(".");
  const filename = name.slice(0, indexOfLastDot);

  // e.g. image/webp
  const indexOfLastSlash = type.lastIndexOf("/");
  const ext = type.slice(indexOfLastSlash + 1);
  return `${filename}_q${quality}.${ext}`;
};
