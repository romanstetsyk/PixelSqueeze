import { useEffect, useMemo, useState } from "react";

export const ImageComparison = ({ activeFile }) => {
  const [url, setUrl] = useState(null);

  const urlMemo = useMemo(() => {
    return URL.createObjectURL(activeFile.blob);
  }, [activeFile.blob]);

  useEffect(() => {
    setUrl(urlMemo);
    return () => URL.revokeObjectURL(url);
  }, [urlMemo, url]);

  return (
    <>
      <form>
        <label>
          Quality: <input type="number" min={1} max={100} step={1} />
        </label>
        <button type="submit">Change</button>
      </form>
      {url && <img src={url} alt="" />}
    </>
  );
};
