import JSZip from "jszip";
import { saveAs } from "file-saver";
import { createFileName } from "utils";
import { DownloadBtn, DownloadDiv } from "./DownloadZip.styled";

export const DownloadZip = ({ compressedFiles }) => {
  const generateZip = () => {
    const zip = new JSZip();
    compressedFiles.forEach(f => zip.file(createFileName(f), f));
    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, "example.zip");
    });
  };

  return (
    <DownloadDiv>
      <p>Download Zip Archive with compressed images:</p>
      <DownloadBtn onClick={generateZip}>Download .zip</DownloadBtn>
    </DownloadDiv>
  );
};
