import { List } from "./ImageList.styled";
import { ImageListItem } from "components/ImageListItem";

export const ImageList = ({
  originalFiles,
  compressedFiles,
  activeFileOriginal,
  removeFile,
  selectFileForComparison,
}) => {
  return (
    <List>
      {originalFiles.map(file => {
        const cf = compressedFiles.find(e => e.id === file.id);

        return (
          <ImageListItem
            key={file.id}
            activeFileOriginal={activeFileOriginal}
            removeFile={removeFile}
            selectFileForComparison={selectFileForComparison}
            file={file}
            cf={cf}
          />
        );
      })}
    </List>
  );
};
