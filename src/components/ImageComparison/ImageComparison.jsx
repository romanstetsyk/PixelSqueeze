import "img-comparison-slider";
import { useEffect, useMemo, useState } from "react";

export const ImageComparison = ({ activeFile }) => {
  const [urlOriginal, setUrlOriginal] = useState(null);
  const [urlCompressed, setUrlCompressed] = useState(null);

  const urlOriginalMemo = useMemo(() => {
    return URL.createObjectURL(activeFile);
  }, [activeFile]);

  const urlCompressedMemo = useMemo(() => {
    return URL.createObjectURL(activeFile.blob);
  }, [activeFile.blob]);

  useEffect(() => {
    setUrlOriginal(urlOriginalMemo);
    setUrlCompressed(urlCompressedMemo);
    return () => {
      URL.revokeObjectURL(urlOriginal);
      URL.revokeObjectURL(urlCompressed);
    };
  }, [urlOriginalMemo, urlCompressedMemo, urlOriginal, urlCompressed]);

  return (
    <>
      <form>
        <label>
          Quality: <input type="number" min={1} max={100} step={1} />
        </label>
        <button type="submit">Change</button>
      </form>
      {/* {url && <img src={url} alt="" />} */}
      <img-comparison-slider>
        <img slot="first" src={urlOriginal} alt="Original" />
        <img slot="second" src={urlCompressed} alt="Modified" />
      </img-comparison-slider>
    </>
  );
};
