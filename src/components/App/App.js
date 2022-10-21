import { DragDrop, ImageList, ImageComparison } from "components";
import { useState } from "react";
import { Container, Section } from "./App.styled";

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
      <Section>
        <Container>
          <DragDrop addFilesToState={addFilesToState} changeFile={changeFile} />
        </Container>
        <Container>
          <ImageList
            files={files}
            removeFile={removeFile}
            selectFileForComparison={selectFileForComparison}
          />
        </Container>
      </Section>
      <Section>
        <Container>
          {activeFile && <ImageComparison activeFile={activeFile} />}
        </Container>
      </Section>
    </>
  );
};
