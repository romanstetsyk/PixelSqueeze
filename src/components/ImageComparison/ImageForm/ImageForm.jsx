import { Box } from "components/App/App.styled";
import { Button } from "components/Button";
import { useEffect, useState } from "react";
import { compress } from "utils";
import { Label } from "./ImageForm.styled";

export const ImageForm = ({
  activeFileOriginal,
  activeFileCompressed,
  changeCompressedFile,
}) => {
  const [quality, setQuality] = useState(activeFileCompressed.quality);
  const [format, setFormat] = useState(activeFileCompressed.type);

  const changeInputQuality = e => {
    const val = e.currentTarget.value;
    setQuality(val);
  };

  const changeInputFormat = e => {
    const val = e.currentTarget.value;
    setFormat(val);
  };

  const onSubmit = e => {
    e.preventDefault();

    compress(activeFileOriginal, quality, format).then(clone =>
      changeCompressedFile(activeFileCompressed.id, clone)
    );
  };

  // Make quality change when props change
  useEffect(() => {
    setQuality(activeFileCompressed.quality);
    setFormat(activeFileCompressed.type);
  }, [activeFileCompressed.quality, activeFileCompressed.type]);

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
