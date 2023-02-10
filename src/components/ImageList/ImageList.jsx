import { List } from "./ImageList.styled";
import { ImageListItem } from "./ImageListItem";

export const ImageList = ({ files, activeFileId, removeFile, setActiveFileId }) => {
  return (
    <List>
      {files.map(file => (
        <ImageListItem
          key={file.id}
          activeFileId={activeFileId}
          removeFile={removeFile}
          setActiveFileId={setActiveFileId}
          file={file}
        />
      ))}
    </List>
  );
};
