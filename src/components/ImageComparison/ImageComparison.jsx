import PropTypes from "prop-types";
import { Box } from "components/App/App.styled";
import "img-comparison-slider";
import { ImageForm } from "./ImageForm";
import { ImageSlider } from "./ImageSlider";

export const ImageComparison = ({ activeFile, updateFile }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      px={4}
      py={8}
      boxShadow="boxNormal"
      borderRadius="sm"
    >
      <ImageForm
        activeFile={activeFile}
        updateFile={updateFile}
      />

      <ImageSlider
        urlOriginal={activeFile.urlOrig}
        urlCompressed={activeFile.urlComp}
      />
    </Box>
  );
};

ImageComparison.propTypes = {
  activeFile: PropTypes.object,
  updateFile: PropTypes.func,
};
