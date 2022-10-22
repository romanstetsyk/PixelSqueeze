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
    return `${((newSize / prevSize - 1) * 100).toFixed(1)}%`;
  };

  const createFileName = (filename, quality) => {
    const indexOfLastDot = filename.lastIndexOf(".");
    const name = filename.slice(0, indexOfLastDot);
    const ext = filename.slice(indexOfLastDot);
    return `${name}_q${quality}${ext}`;
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
                Quality: {cf.quality}%{" "}
                <a
                  href={URL.createObjectURL(cf)}
                  download={createFileName(cf.name, cf.quality)}
                >
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
