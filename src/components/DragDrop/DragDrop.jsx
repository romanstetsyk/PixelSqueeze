import PropTypes from "prop-types";
import { Box, Icon } from "components/App/App.styled";
import { Button } from "components/Button";
import { nanoid } from "nanoid";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { compress } from "utils";
import { StyledDiv } from "./DragDrop.styled";
import { BsUpload } from "react-icons/bs";

export const DragDrop = ({ addOriginalFiles, addCompressedFiles }) => {
  const DEFAULT_QUALITY = 70;
  const DEFAULT_TYPE = "image/jpeg";

  const onDrop = useCallback(
    acceptedFiles => {
      acceptedFiles.forEach(file => (file.id = nanoid()));
      addOriginalFiles(acceptedFiles); // Changes originalFiles state

      acceptedFiles.forEach(file => {
        compress(file, DEFAULT_QUALITY, DEFAULT_TYPE).then(clone =>
          addCompressedFiles(clone)
        );
      });
    },
    [addOriginalFiles, addCompressedFiles]
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
  addOriginalFiles: PropTypes.func.isRequired,
  addCompressedFiles: PropTypes.func.isRequired,
};
