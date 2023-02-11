import PropTypes from "prop-types";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Button } from "components/Button";
import { Box } from "components/App/App.styled";

export const DownloadZip = ({ files }) => {
  const generateZip = () => {
    const zip = new JSZip();
    files.forEach(f => zip.file(f.blobComp.name, f.blobComp));
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
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
};
