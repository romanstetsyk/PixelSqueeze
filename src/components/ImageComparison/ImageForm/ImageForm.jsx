import PropTypes from "prop-types";
import { Box } from "components/App/App.styled";
import { Button } from "components/Button";
import { useEffect, useState } from "react";
import { compress } from "utils";
import { Label } from "./ImageForm.styled";

export const ImageForm = ({ activeFile, updateUrlAndSize }) => {
  const [quality, setQuality] = useState(activeFile.quality);
  const [format, setFormat] = useState(activeFile.type);

  const changeInputQuality = e => {
    const val = e.currentTarget.value;
    setQuality(val);
  };

  const changeInputFormat = e => {
    const val = e.currentTarget.value;
    setFormat(val);
  };

  const onSubmit = async e => {
    e.preventDefault();

    const { sizeComp, urlComp } = await compress(
      activeFile.blob,
      quality,
      format
    );
    console.log(urlComp);
    updateUrlAndSize(activeFile.id, await urlComp, await sizeComp);
  };

  // Make quality change when props change
  useEffect(() => {
    setQuality(activeFile.quality);
    setFormat(activeFile.type);
  }, [activeFile.quality, activeFile.type]);

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
          onChange={changeInputQuality}
          type="number"
          name="quality"
          min={1}
          max={100}
          step={1}
          value={quality}
        />
      </Label>
      <Label>
        <span>Format:</span>
        <select name="format" onChange={changeInputFormat} value={format}>
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
  updateUrlAndSize: PropTypes.func.isRequired,
};
