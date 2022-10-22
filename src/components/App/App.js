import { DragDrop, ImageList, ImageComparison } from "components";
import { useState } from "react";
import { Container, Section } from "./App.styled";

export const App = () => {
  const [originalFiles, setOriginalFiles] = useState([]);
  const [compressedFiles, setCompressedFiles] = useState([]);
  const [activeFileOriginal, setActiveFileOriginal] = useState(null);
  const [activeFileCompressed, setActiveFileCompressed] = useState(null);

  const addOriginalFiles = files => {
    setOriginalFiles(prev => prev.concat(files));
  };

  const addCompressedFiles = files => {
    setCompressedFiles(prev => prev.concat(files));
  };

  const changeCompressedFile = (id, updFile) => {
    setCompressedFiles(prev =>
      prev.map(oldFile => {
        // console.log(oldFile === updFile);
        return oldFile.id === id ? updFile : oldFile;
      })
    );
  };

  const selectFileForComparison = id => {
    setActiveFileOriginal(originalFiles.find(e => e.id === id));
    setActiveFileCompressed(compressedFiles.find(e => e.id === id));
  };

  const removeFile = id => {
    if (activeFileOriginal?.id === id) setActiveFileOriginal(null);
    if (activeFileCompressed?.id === id) setActiveFileCompressed(null);
    setOriginalFiles(prev => prev.filter(f => f.id !== id));
    setCompressedFiles(prev => prev.filter(f => f.id !== id));
  };

  return (
    <>
      <Section>
        <Container>
          <DragDrop
            addOriginalFiles={addOriginalFiles}
            addCompressedFiles={addCompressedFiles}
          />
        </Container>
        <Container>
          <ImageList
            originalFiles={originalFiles}
            compressedFiles={compressedFiles}
            removeFile={removeFile}
            selectFileForComparison={selectFileForComparison}
          />
        </Container>
      </Section>
      <Section>
        <Container>
          {activeFileCompressed && (
            <ImageComparison
              activeFileOriginal={activeFileOriginal}
              activeFileCompressed={activeFileCompressed}
            />
          )}
        </Container>
      </Section>
    </>
  );
};
