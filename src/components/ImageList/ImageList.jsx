export const ImageList = ({ files, removeFile, selectFileForComparison }) => {
  const formatFileSize = numOfBytes => {
    return `${(numOfBytes / 1000).toFixed(2)}Kb`;
  };

  return (
    <ul>
      {files.map(file => (
        <li key={file.id}>
          <button type="button" onClick={() => removeFile(file.id)}>
            Remove
          </button>{" "}
          {file.name} {formatFileSize(file.size)} {"->"}{" "}
          {!file.sizeCompressed
            ? "loading"
            : formatFileSize(file.sizeCompressed)}
          {file.sizeCompressed && (
            <a href={URL.createObjectURL(file.blob)} download>
              download
            </a>
          )}
          <button onClick={() => selectFileForComparison(file)}>Open</button>
        </li>
      ))}
    </ul>
  );
};
