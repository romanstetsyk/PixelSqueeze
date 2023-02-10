import PropTypes from "prop-types";
import { BsDownload, BsTrash } from "react-icons/bs";
import { Box, Icon, IconContainer } from "components/App/App.styled";
import { calcSizeChange, createFileName, formatFileSize } from "utils";
import { FileName, ListItem } from "./ImageListItem.styled";

export const ImageListItem = ({
  activeFileId,
  removeFile,
  setActiveFileId,
  file,
}) => {
  return (
    <ListItem
      title="Click to compare images"
      tabIndex={0}
      active={file.id === activeFileId}
      onClick={() => setActiveFileId(file.id)}
      onKeyUp={e => {
        if (e.key === "Enter") {
          setActiveFileId(file.id);
        }
      }}
    >
      <Box display="flex" justifyContent="space-between" gap={4}>
        <FileName>{file.blob.name}</FileName>
        <IconContainer
          action="remove"
          as="button"
          type="button"
          onClick={e => {
            e.stopPropagation(); // prevent ListItem onClick to fire up
            removeFile(file.id);
          }}
          title="Remove this image"
        >
          <Icon as={BsTrash} />
        </IconContainer>{" "}
      </Box>
      <p>
        {formatFileSize(file.blob.size)} &rarr;{" "}
        {!file.urlComp ? (
          "Loading"
        ) : (
          <>
            {formatFileSize(file.sizeComp)} (
            {calcSizeChange(file.blob.size, file.sizeComp)})
          </>
        )}
      </p>

      {file.urlComp && (
        <Box
          display="flex"
          justifyContent="space-between"
          gap={4}
          alignItems="center"
        >
          <span>Quality: {file.quality}% </span>
          <span>{file.type}</span>
          <IconContainer
            as="a"
            title="Download compressed file"
            onClick={e => e.stopPropagation()}
            href={file.urlComp}
            download={createFileName(file.blob.name, file.quality, file.type)}
          >
            <Icon as={BsDownload} />
          </IconContainer>
        </Box>
      )}
    </ListItem>
  );
};

ImageListItem.propTypes = {
  activeFileId: PropTypes.string,
  removeFile: PropTypes.func.isRequired,
  setActiveFileId: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired,
};
