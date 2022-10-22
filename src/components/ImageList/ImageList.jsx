export const ImageList = ({
  originalFiles,
  compressedFiles,
  removeFile,
  selectFileForComparison,
}) => {
  const formatFileSize = numOfBytes => {
    return `${(numOfBytes / 1000).toFixed(2)}Kb`;
  };

  return (
    <ul>
      {originalFiles.map(file => {
        const cf = compressedFiles.find(e => e.id === file.id);

        return (
          <li key={file.id}>
            <button type="button" onClick={() => removeFile(file.id)}>
              Remove
            </button>{" "}
            {file.name} {formatFileSize(file.size)} {"->"}{" "}
            {!cf ? "loading" : formatFileSize(cf.size)}
            {cf && (
              <a href={URL.createObjectURL(cf)} download>
                download
              </a>
            )}
            <button onClick={() => selectFileForComparison(file.id)}>
              Open
            </button>
          </li>
        );
      })}
    </ul>
  );
};
