import JSZip from "jszip";
import { saveAs } from "file-saver";
import { createFileName } from "utils";

export const DownloadZip = ({ compressedFiles }) => {
  const generateZip = () => {
    const zip = new JSZip();
    compressedFiles.forEach(f => zip.file(createFileName(f), f));
    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, "example.zip");
    });
  };

  return (
    <>
      <p>Download Zip Archive with compressed images:</p>
      <button onClick={generateZip}>Download</button>
    </>
  );
};
