import { DragDrop, ImageList, ImageComparison } from "components";
import { useState } from "react";

export const App = () => {
  const [files, setFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);

  const addFilesToState = files => {
    setFiles(prev => prev.concat(files));
  };

  const changeFile = (id, updFile) => {
    setFiles(prev =>
      prev.map(oldFile => (oldFile.id === id ? updFile : oldFile))
    );
  };

  const selectFileForComparison = file => {
    setActiveFile(file);
  };

  const removeFile = id => {
    if (activeFile && activeFile.id === id) setActiveFile(null);
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  return (
    <>
      <DragDrop addFilesToState={addFilesToState} changeFile={changeFile} />
      <ImageList
        files={files}
        removeFile={removeFile}
        selectFileForComparison={selectFileForComparison}
      />
      {activeFile && <ImageComparison activeFile={activeFile} />}
    </>
  );
};
