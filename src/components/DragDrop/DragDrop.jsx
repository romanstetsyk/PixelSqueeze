import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export const DragDrop = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>drop files here</p>
    </div>
  );
};
