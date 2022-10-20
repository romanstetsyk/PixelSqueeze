export const ImageList = ({ files }) => {
  return (
    <ul>
      {files.map(file => (
        <li key={file.id}>
          {file.name} {file.size}
          {/* <img src={URL.createObjectURL(file)} alt="" /> */}
        </li>
      ))}
    </ul>
  );
};
