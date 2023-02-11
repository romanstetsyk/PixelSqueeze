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
  const [files, setFiles] = useState([]);
  const [activeFileId, setActiveFileId] = useState(null);

  const addFiles = files => {
    setFiles(prev => [...prev, ...files]);
  };

  const updateFile = ({ id, urlComp, quality, blobComp }) => {
    setFiles(prev =>
      prev.map(f => {
        if (f.id === id) {
          URL.revokeObjectURL(f.urlComp);
          return { ...f, urlComp, quality, blobComp };
        } else {
          return f;
        }
      })
    );
  };

  const removeFile = id => {
    if (activeFileId === id) setActiveFileId(null);
    setFiles(prev =>
      prev.filter(f => {
        if (f.id === id) {
          URL.revokeObjectURL(f.urlComp);
          URL.revokeObjectURL(f.urlOrig);
          return false;
        } else {
          return true;
        }
      })
    );
  };

  useEffect(() => {
    const element = document.getElementById("preview");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, [activeFileId]);

  return (
    <>
      <Header />

      <Section as="main">
        <Container>
          <DragDrop addFiles={addFiles} updateFile={updateFile} />
        </Container>

        <Container>
          <ImageList
            files={files}
            activeFileId={activeFileId}
            removeFile={removeFile}
            setActiveFileId={setActiveFileId}
          />
        </Container>

        {files.length > 0 && (
          <Container>
            <DownloadZip files={files} />
          </Container>
        )}

        {activeFileId && (
          <Container id="preview">
            <ImageComparison
              activeFile={files.find(file => file.id === activeFileId)}
              updateFile={updateFile}
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
            text="Upload .jpeg, .png, or .webp images. Files are processed directly in the browser"
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
