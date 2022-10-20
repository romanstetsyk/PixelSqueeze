import { nanoid } from "nanoid";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { StyledDiv } from "./DragDrop.styled";

export const DragDrop = ({ addFilesToState }) => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    acceptedFiles.forEach(file => (file.id = nanoid()));
    addFilesToState(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <StyledDiv {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </StyledDiv>
  );
};
