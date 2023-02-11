import PropTypes from "prop-types";
import { BsDownload, BsTrash } from "react-icons/bs";
import { Box, Icon, IconContainer } from "components/App/App.styled";
import { calcSizeChange, formatFileSize } from "utils";
import { FileName, ListItem } from "./ImageListItem.styled";

export const ImageListItem = ({
  activeFileId,
  removeFile,
  setActiveFileId,
  file,
}) => {
  const { id, blobOrig, blobComp, urlComp, quality } = file;
  return (
    <ListItem
      title="Click to compare images"
      tabIndex={0}
      active={id === activeFileId}
      onClick={() => setActiveFileId(id)}
      onKeyUp={e => {
        if (e.key === "Enter") {
          setActiveFileId(id);
        }
      }}
    >
      <Box display="flex" justifyContent="space-between" gap={4}>
        <FileName>{blobOrig.name}</FileName>
        <IconContainer
          action="remove"
          as="button"
          type="button"
          onClick={e => {
            e.stopPropagation(); // prevent ListItem onClick to fire up
            removeFile(id);
          }}
          title="Remove this image"
        >
          <Icon as={BsTrash} />
        </IconContainer>{" "}
      </Box>
      <p>
        {formatFileSize(blobOrig.size)} &rarr;{" "}
        {!blobComp ? (
          "Loading"
        ) : (
          <>
            {formatFileSize(blobComp.size)} (
            {calcSizeChange(blobOrig.size, blobComp.size)})
          </>
        )}
      </p>

      {blobComp && (
        <Box
          display="flex"
          justifyContent="space-between"
          gap={4}
          alignItems="center"
        >
          <span>Quality: {quality}% </span>
          <span>{blobComp.type}</span>
          <IconContainer
            as="a"
            title="Download compressed file"
            onClick={e => e.stopPropagation()}
            href={urlComp}
            download={blobComp.name}
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
