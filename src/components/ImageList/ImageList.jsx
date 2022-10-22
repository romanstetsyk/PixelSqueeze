import { List, ListItem } from "./ImageList.styled";

export const ImageList = ({
  originalFiles,
  compressedFiles,
  removeFile,
  selectFileForComparison,
}) => {
  const formatFileSize = numOfBytes => {
    return `${(numOfBytes / 1000).toFixed(2)}Kb`;
  };

  const calcSizeChange = (prevSize, newSize) => {
    const change = Math.abs(newSize / prevSize - 1);
    const sign = prevSize > newSize ? "-" : "+";
    return `${sign}${(change * 100).toFixed(1)}%`;
  };

  const createFileName = file => {
    console.log(file);
    const { name, type, quality } = file;

    // e.g. filename.ext
    const indexOfLastDot = name.lastIndexOf(".");
    const filename = name.slice(0, indexOfLastDot);

    // e.g. image/webp
    const indexOfLastSlash = type.lastIndexOf("/");
    const ext = type.slice(indexOfLastSlash + 1);
    return `${filename}_q${quality}.${ext}`;
  };

  return (
    <List>
      {originalFiles.map(file => {
        const cf = compressedFiles.find(e => e.id === file.id);

        return (
          <ListItem key={file.id}>
            <div>
              <p>Name: {file.name}</p>
              <button type="button" onClick={() => removeFile(file.id)}>
                Remove
              </button>{" "}
            </div>
            <p>
              Size: {formatFileSize(file.size)} &rarr;{" "}
              {!cf ? "loading" : formatFileSize(cf.size)} (
              {cf && calcSizeChange(file.size, cf.size)})
            </p>

            {cf && (
              <div>
                <p>Quality: {cf.quality}% </p>
                <p>Type: {cf.type}</p>
                <a href={URL.createObjectURL(cf)} download={createFileName(cf)}>
                  Download
                </a>
                <button onClick={() => selectFileForComparison(file.id)}>
                  Open
                </button>
              </div>
            )}
          </ListItem>
        );
      })}
    </List>
  );
};
