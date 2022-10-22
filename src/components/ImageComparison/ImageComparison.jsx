import "img-comparison-slider";
import { useEffect, useMemo, useState } from "react";

export const ImageComparison = ({
  activeFileOriginal,
  activeFileCompressed,
}) => {
  const [urlOriginal, setUrlOriginal] = useState(null);
  const [urlCompressed, setUrlCompressed] = useState(null);

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

  return (
    <>
      <form>
        <label>
          Quality: <input type="number" min={1} max={100} step={1} />
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
