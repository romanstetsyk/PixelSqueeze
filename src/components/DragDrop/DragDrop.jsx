import { nanoid } from "nanoid";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { StyledDiv } from "./DragDrop.styled";

export const DragDrop = ({ addOriginalFiles, addCompressedFiles }) => {
  const DEFAULT_QUALITY = 1;

  const onDrop = useCallback(
    acceptedFiles => {
      acceptedFiles.forEach(file => (file.id = nanoid()));
      addOriginalFiles(acceptedFiles); // Changes originalFiles state

      acceptedFiles.forEach(file => {
        let img = new Image();
        // img event handler
        img.onload = () => {
          const [width, height] = [img.width, img.height];
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.width = width;
          canvas.height = height;
          context.drawImage(img, 0, 0, width, height);
          canvas.toBlob(
            blob => {
              const clone = new File([blob], file.name, { type: file.type });
              clone.id = file.id;
              clone.quality = DEFAULT_QUALITY;
              addCompressedFiles(clone); // Changes compressedFiles state
              URL.revokeObjectURL(img.src);
            },
            "image/jpeg",
            DEFAULT_QUALITY / 100 // Quality as a decimal
          );
        };
        // fire the img event handler
        img.src = URL.createObjectURL(file);
      });
    },
    [addOriginalFiles, addCompressedFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <StyledDiv {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </StyledDiv>
  );
};
