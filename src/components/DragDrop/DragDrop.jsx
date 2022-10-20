import { nanoid } from "nanoid";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { StyledDiv } from "./DragDrop.styled";

export const DragDrop = ({ addFilesToState, changeFile }) => {
  const DEFAULT_QUALITY = 1;

  const onDrop = useCallback(
    acceptedFiles => {
      addFilesToState(acceptedFiles);
      console.log(acceptedFiles);

      acceptedFiles.forEach(file => {
        // Add id to file
        file.id = nanoid();
        file.quality = DEFAULT_QUALITY;
        // Compress file
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
              file.blob = blob;
              file.sizeCompressed = blob.size;
              changeFile(file.id, file);
            },
            "image/jpeg",
            DEFAULT_QUALITY / 100 // Quality as a decimal
          );
        };
        // fire the img event handler
        img.src = URL.createObjectURL(file);
      });
    },
    [addFilesToState, changeFile]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <StyledDiv {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </StyledDiv>
  );
};
