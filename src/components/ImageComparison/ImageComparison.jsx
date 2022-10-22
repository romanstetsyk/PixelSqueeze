import "img-comparison-slider";
import { useEffect, useMemo, useState } from "react";

export const ImageComparison = ({
  activeFileOriginal,
  activeFileCompressed,
  changeCompressedFile,
}) => {
  const [urlOriginal, setUrlOriginal] = useState(null);
  const [urlCompressed, setUrlCompressed] = useState(null);
  const [quality, setQuality] = useState(activeFileCompressed.quality);

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

  // Make quality change when props change
  useEffect(() => {
    setQuality(activeFileCompressed.quality);
  }, [activeFileCompressed.quality]);

  const onSubmit = e => {
    e.preventDefault();
    let img = new Image();
    // img event handler
    img.onload = () => {
      const [width, height] = [img.width, img.height];
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      context.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        blob => {
          const clone = new File([blob], activeFileOriginal.name, {
            type: activeFileOriginal.type,
          });
          clone.id = activeFileCompressed.id;
          clone.quality = quality;
          changeCompressedFile(activeFileCompressed.id, clone); // Changes compressedFiles state
          URL.revokeObjectURL(img.src);
        },
        "image/jpeg",
        quality / 100 // Quality as a decimal
      );
    };
    // fire the img event handler
    img.src = URL.createObjectURL(activeFileOriginal);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Quality:{" "}
          <input
            onChange={changeInputQuality}
            type="number"
            name="quality"
            min={1}
            max={100}
            step={1}
            value={quality}
          />
        </label>
        <button type="submit">Change</button>
      </form>

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
    </>
  );
};
