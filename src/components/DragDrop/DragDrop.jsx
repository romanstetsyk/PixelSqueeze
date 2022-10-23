import { nanoid } from "nanoid";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Browse, StyledDiv, UploadSvg } from "./DragDrop.styled";

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

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ onDrop, accept: { "image/*": [] } });

  return (
    <StyledDiv {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
      <input {...getInputProps()} />
      <UploadSvg />
      <p>
        Drag&Drop images here <small>or</small> <Browse>Browse files</Browse>
      </p>
    </StyledDiv>
  );
};
