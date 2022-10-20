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

  return <>{url && <img src={url} alt="" />}</>;
};
