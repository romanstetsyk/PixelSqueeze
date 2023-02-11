import PropTypes from "prop-types";
import { Box } from "components/App/App.styled";
import { Button } from "components/Button";
import { useEffect, useState } from "react";
import { compress } from "utils";
import { Label } from "./ImageForm.styled";

export const ImageForm = ({ activeFile, updateFile }) => {
  const [quality, setQuality] = useState(activeFile.quality);
  const [type, setType] = useState(activeFile.blobComp.type);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "quality":
        setQuality(value);
        break;
      case "type":
        setType(value);
        break;
      default:
        throw new Error("Invalid field name");
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    const { blobComp, urlComp } = await compress(
      activeFile.blobOrig,
      quality,
      type
    );
    updateFile({ id: activeFile.id, urlComp, blobComp, quality });
  };

  // Make quality change when props change
  useEffect(() => {
    setQuality(activeFile.quality);
    setType(activeFile.blobComp.type);
  }, [activeFile.quality, activeFile.blobComp.type]);

  return (
    <Box
      as="form"
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      gap={2}
      onSubmit={onSubmit}
    >
      <Label>
        <span>Quality, %:</span>
        <input
          onChange={handleInputChange}
          type="number"
          name="quality"
          min={1}
          max={100}
          step={1}
          value={quality}
        />
      </Label>
      <Label>
        <span>Type:</span>
        <select name="type" onChange={handleInputChange} value={type}>
          <option value="image/jpeg">JPG</option>
          <option value="image/webp">WebP</option>
          <option value="image/png">PNG</option>
        </select>
      </Label>
      <Button type="submit">Update</Button>
    </Box>
  );
};

ImageForm.propTypes = {
  activeFile: PropTypes.object.isRequired,
  updateFile: PropTypes.func.isRequired,
};
