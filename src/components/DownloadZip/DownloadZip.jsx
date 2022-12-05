import PropTypes from "prop-types";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { createFileName } from "utils";
import { Button } from "components/Button";
import { Box } from "components/App/App.styled";

export const DownloadZip = ({ compressedFiles }) => {
  const generateZip = () => {
    const zip = new JSZip();
    compressedFiles.forEach(f => zip.file(createFileName(f), f));
    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, "example.zip");
    });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={4}
      py={8}
      mt={8}
    >
      <p>Download Zip Archive with compressed images:</p>
      <Button type="button" onClick={generateZip}>
        Download .zip
      </Button>
    </Box>
  );
};

DownloadZip.propTypes = {
  compressedFiles: PropTypes.arrayOf(PropTypes.instanceOf(File)).isRequired,
};
