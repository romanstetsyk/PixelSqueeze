import { nanoid } from "nanoid";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { compress } from "utils";
import { Browse, StyledDiv, UploadSvg } from "./DragDrop.styled";

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
      autoFocus: true,
    });

  return (
    <StyledDiv {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
      <input {...getInputProps()} />

      <div>
        <UploadSvg />
        <p>Drag&Drop images here</p>
        <div>
          <small>or</small> <Browse>Browse files</Browse>
        </div>
      </div>
    </StyledDiv>
  );
};
