import "img-comparison-slider";
import { useEffect, useMemo, useState } from "react";
import { compress } from "utils";
import {
  ChangeBtn,
  ComparisonContainer,
  Form,
  Label,
} from "./ImageComparison.styled";

export const ImageComparison = ({
  activeFileOriginal,
  activeFileCompressed,
  changeCompressedFile,
}) => {
  const [urlOriginal, setUrlOriginal] = useState(null);
  const [urlCompressed, setUrlCompressed] = useState(null);
  const [quality, setQuality] = useState(activeFileCompressed.quality);
  const [format, setFormat] = useState(activeFileCompressed.type);

  // prevent recreating urls in infinite loop
  const urlOriginalMemo = useMemo(() => {
    return URL.createObjectURL(activeFileOriginal);
  }, [activeFileOriginal]);

  const urlCompressedMemo = useMemo(() => {
    return URL.createObjectURL(activeFileCompressed);
  }, [activeFileCompressed]);

  useEffect(() => {
    setUrlOriginal(urlOriginalMemo);
    setUrlCompressed(urlCompressedMemo);
    return () => {
      URL.revokeObjectURL(urlOriginal);
      URL.revokeObjectURL(urlCompressed);
    };
  }, [urlOriginalMemo, urlCompressedMemo, urlOriginal, urlCompressed]);

  const changeInputQuality = e => {
    const val = e.currentTarget.value;
    setQuality(val);
  };

  const changeInputFormat = e => {
    const val = e.currentTarget.value;
    setFormat(val);
  };

  // Make quality change when props change
  useEffect(() => {
    setQuality(activeFileCompressed.quality);
    setFormat(activeFileCompressed.type);
  }, [activeFileCompressed.quality, activeFileCompressed.type]);

  const onSubmit = e => {
    e.preventDefault();

    compress(activeFileOriginal, quality, format).then(clone =>
      changeCompressedFile(activeFileCompressed.id, clone)
    );
  };

  return (
    <ComparisonContainer>
      <Form onSubmit={onSubmit}>
        <Label>
          Quality, %:{" "}
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
          Format:{" "}
          <select name="format" onChange={changeInputFormat} value={format}>
            <option value="image/jpeg">JPG</option>
            <option value="image/webp">WebP</option>
            <option value="image/png">PNG</option>
          </select>
        </Label>
        <ChangeBtn type="submit">Update</ChangeBtn>
      </Form>

      <div>
        <img-comparison-slider class="coloured-slider">
          <figure slot="first" className="before">
            <img width="100%" src={urlOriginal} alt="" />
            <figcaption>Before</figcaption>
          </figure>
          <figure slot="second" className="after">
            <img width="100%" src={urlCompressed} alt="" />
            <figcaption>After</figcaption>
          </figure>
        </img-comparison-slider>
      </div>
    </ComparisonContainer>
  );
};
