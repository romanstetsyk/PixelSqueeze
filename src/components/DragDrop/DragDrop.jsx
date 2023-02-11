import PropTypes from "prop-types";
import { Box, Icon } from "components/App/App.styled";
import { Button } from "components/Button";
import { nanoid } from "nanoid";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { compress } from "utils";
import { StyledDiv } from "./DragDrop.styled";
import { BsUpload } from "react-icons/bs";

export const DragDrop = ({ addFiles, updateFile }) => {
  const DEFAULT_QUALITY = 1;
  const DEFAULT_TYPE = "image/jpeg";

  const onDrop = useCallback(
    // Always an array
    acceptedFiles => {
      const [quality, type] = [DEFAULT_QUALITY, DEFAULT_TYPE];

      const filesArr = acceptedFiles.map(blobOrig => {
        const id = nanoid();
        const urlOrig = URL.createObjectURL(blobOrig);
        const blobComp = null;
        const urlComp = null;
        return { id, urlOrig, urlComp, blobOrig, blobComp, quality };
      });
      addFiles(filesArr);

      filesArr.forEach(async ({ id, blobOrig }) => {
        const { urlComp, blobComp } = await compress(blobOrig, quality, type);
        updateFile({ id, urlComp, quality, blobComp });
      });
    },
    [addFiles, updateFile]
  );

  const onDropRejected = e => console.log(e);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      onDropRejected,
      accept: {
        "image/jpeg": [".jpg", ".jpeg", ".jpe", ".jif", ".jfif"],
        "image/png": [".png"],
        "image/webp": [".webp"],
      },
      autoFocus: false,
    });

  return (
    <StyledDiv {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
      <input {...getInputProps()} />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="1rem"
      >
        <Icon as={BsUpload} />
        <p>Drag & Drop images here</p>
        <Box
          display="inline-flex"
          gap="inherit"
          alignItems="center"
          justifyContent="center"
        >
          <small>or</small> <Button>Browse files</Button>
        </Box>
      </Box>
    </StyledDiv>
  );
};

DragDrop.propTypes = {
  addFiles: PropTypes.func.isRequired,
  updateFile: PropTypes.func.isRequired,
};
