export const ImageList = ({ files, removeFile, selectFileForComparison }) => {
  return (
    <ul>
      {files.map(file => (
        <li key={file.id}>
          <button type="button" onClick={() => removeFile(file.id)}>
            Remove
          </button>{" "}
          {file.name} {file.sizeCompressed}{" "}
          <button onClick={() => selectFileForComparison(file)}>Open</button>
        </li>
      ))}
    </ul>
  );
};
