export const ImageList = ({ files, selectFileForComparison }) => {
  return (
    <ul>
      {files.map(file => (
        <li key={file.id}>
          {file.name} {file.size}{" "}
          <button onClick={() => selectFileForComparison(file)}>Open</button>
        </li>
      ))}
    </ul>
  );
};
