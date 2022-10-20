import { DragDrop, ImageList } from "components";
import { useState } from "react";

export const App = () => {
  const [files, setFiles] = useState([]);

  const addFilesToState = files => {
    setFiles(prev => prev.concat(files));
  };

  return (
    <>
      <DragDrop addFilesToState={addFilesToState} />
      <ImageList files={files} />
    </>
  );
};
