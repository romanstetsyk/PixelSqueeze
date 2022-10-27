import {
  DragDrop,
  ImageList,
  ImageComparison,
  DownloadZip,
  Card,
  Footer,
  Header,
} from "components";
import { useEffect, useState } from "react";
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
      prev.map(oldFile => (oldFile.id === id ? updFile : oldFile))
    );
    setActiveFileCompressed(updFile);
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

  useEffect(() => {
    const element = document.getElementById("preview");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, [activeFileOriginal]);

  return (
    <>
      <Header />

      <Section as="main">
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
            activeFileOriginal={activeFileOriginal}
            removeFile={removeFile}
            selectFileForComparison={selectFileForComparison}
          />
        </Container>

        {compressedFiles.length > 0 && (
          <Container>
            <DownloadZip compressedFiles={compressedFiles} />
          </Container>
        )}

        {activeFileCompressed && (
          <Container id="preview">
            <ImageComparison
              activeFileOriginal={activeFileOriginal}
              activeFileCompressed={activeFileCompressed}
              changeCompressedFile={changeCompressedFile}
            />
          </Container>
        )}
      </Section>

      <Section as="section" pt={20}>
        <Container
          pt={12}
          borderTop="thinSolid"
          borderColor="gray3"
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(16em, 1fr))"
          gridGap={4}
          textAlign="center"
        >
          <Card
            title="Upload"
            text="Select up to 20 images. Files are processed directly in browser"
          />
          <Card
            title="Customize"
            text="Customize the quality and type of each image. Compare the original and compressed images side-by-side"
          />
          <Card
            title="Download"
            text="Download a .zip archive with all compressed images"
          />
        </Container>
      </Section>

      <Footer />
    </>
  );
};
