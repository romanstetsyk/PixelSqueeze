export const ImageList = ({ files }) => {
  return (
    <ul>
      {files.map(file => (
        <li key={file.id}>
          {file.name} {file.size} <button>Open</button>
        </li>
      ))}
    </ul>
  );
};
