import { BsDownload, BsTrash } from "react-icons/bs";
import { Box, Icon } from "components/App/App.styled";
import { calcSizeChange, createFileName, formatFileSize } from "utils";
import { ButtonIcon, FileName, ListItem } from "./ImageListItem.styled";

export const ImageListItem = ({
  activeFileOriginal,
  removeFile,
  selectFileForComparison,
  file,
  cf,
}) => {
  return (
    <ListItem
      title="Click to compare images"
      tabIndex={0}
      active={file.id === activeFileOriginal?.id}
      onClick={() => selectFileForComparison(file.id)}
      onKeyUp={e => {
        if (e.key === "Enter") {
          selectFileForComparison(file.id);
        }
      }}
    >
      <Box display="flex" justifyContent="space-between" gap={4}>
        <FileName>{file.name}</FileName>
        <ButtonIcon
          type="button"
          onClick={e => {
            e.stopPropagation(); // prevent ListItem onClick to fire up
            removeFile(file.id);
          }}
          title="Remove this image"
        >
          <Icon as={BsTrash} effect="remove" />
        </ButtonIcon>{" "}
      </Box>
      <p>
        {formatFileSize(file.size)} &rarr;{" "}
        {!cf ? (
          "Loading"
        ) : (
          <>
            {formatFileSize(cf.size)} ({calcSizeChange(file.size, cf.size)})
          </>
        )}
      </p>

      {cf && (
        <Box
          display="flex"
          justifyContent="space-between"
          gap={4}
          alignItems="center"
        >
          <span>Quality: {cf.quality}% </span>
          <span>{cf.type}</span>
          <Box
            title="Download compressed file"
            as="a"
            display="flex"
            alignItems="center"
            onClick={e => e.stopPropagation()}
            href={URL.createObjectURL(cf)}
            download={createFileName(cf)}
          >
            <Icon as={BsDownload} />
          </Box>
        </Box>
      )}
    </ListItem>
  );
};
