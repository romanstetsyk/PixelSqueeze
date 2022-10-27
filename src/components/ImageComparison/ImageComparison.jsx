import { Box } from "components/App/App.styled";
import "img-comparison-slider";
import { useEffect, useMemo, useState } from "react";
import { ImageForm } from "./ImageForm";

export const ImageComparison = ({
  activeFileOriginal,
  activeFileCompressed,
  changeCompressedFile,
}) => {
  const [urlOriginal, setUrlOriginal] = useState(null);
  const [urlCompressed, setUrlCompressed] = useState(null);

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
        activeFileOriginal={activeFileOriginal}
        activeFileCompressed={activeFileCompressed}
        changeCompressedFile={changeCompressedFile}
      />

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
    </Box>
  );
};
