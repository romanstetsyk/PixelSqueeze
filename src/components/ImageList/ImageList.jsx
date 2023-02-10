import { List } from "./ImageList.styled";
import { ImageListItem } from "./ImageListItem";

export const ImageList = ({ files, activeFileId, removeFile, selectFile }) => {
  return (
    <List>
      {files.map(file => (
        <ImageListItem
          key={file.id}
          activeFileId={activeFileId}
          removeFile={removeFile}
          selectFile={selectFile}
          file={file}
        />
      ))}
    </List>
  );
};
