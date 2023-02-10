import PropTypes from "prop-types";
import { Box, Icon } from "components/App/App.styled";
import { Button } from "components/Button";
import { nanoid } from "nanoid";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { compress } from "utils";
import { StyledDiv } from "./DragDrop.styled";
import { BsUpload } from "react-icons/bs";

export const DragDrop = ({ addFiles, updateUrlAndSize }) => {
  const DEFAULT_QUALITY = 1;
  const DEFAULT_TYPE = "image/jpeg";

  const onDrop = useCallback(
    acceptedFiles => {
      // Add ids
      const filesArr = acceptedFiles.map(blob => {
        const id = nanoid();
        const urlOrig = URL.createObjectURL(blob);
        const urlComp = null;
        const quality = DEFAULT_QUALITY;
        const type = DEFAULT_TYPE;
        const sizeComp = null;
        return { id, urlOrig, urlComp, quality, type, sizeComp, blob };
      });
      addFiles(filesArr);

      filesArr.forEach(async file => {
        const { sizeComp, urlComp } = await compress(
          file.blob,
          DEFAULT_QUALITY,
          DEFAULT_TYPE
        );
        updateUrlAndSize(file.id, await urlComp, await sizeComp);
      });
    },
    [addFiles, updateUrlAndSize]
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
  updateUrlAndSize: PropTypes.func.isRequired,
};
