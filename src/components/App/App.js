import { DragDrop, ImageList, ImageComparison } from "components";
import { useState } from "react";

export const App = () => {
  const [files, setFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);

  const addFilesToState = files => {
    setFiles(prev => prev.concat(files));
  };

  const selectFileForComparison = file => {
    setActiveFile(file);
  };

  return (
    <>
      <DragDrop addFilesToState={addFilesToState} />
      <ImageList
        files={files}
        selectFileForComparison={selectFileForComparison}
      />
      {activeFile && <ImageComparison activeFile={activeFile} />}
    </>
  );
};
