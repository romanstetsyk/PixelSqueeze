import {
  DownloadSvg,
  List,
  ListItem,
  RemoveSvg,
  StyledLink,
} from "./ImageList.styled";
import { createFileName, formatFileSize, calcSizeChange } from "utils";

export const ImageList = ({
  originalFiles,
  compressedFiles,
  activeFileOriginal,
  removeFile,
  selectFileForComparison,
}) => {
  return (
    <List>
      {originalFiles.map(file => {
        const cf = compressedFiles.find(e => e.id === file.id);

        return (
          <ListItem
            tabIndex={0}
            active={file.id === activeFileOriginal?.id}
            key={file.id}
            onClick={() => selectFileForComparison(file.id)}
            onKeyUp={e => {
              if (e.key === "Enter") {
                selectFileForComparison(file.id);
              }
            }}
          >
            <div>
              <p>{file.name}</p>
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation(); // prevent ListItem onClick to fire up
                  removeFile(file.id);
                }}
                title="Remove this image"
              >
                <RemoveSvg />
              </button>{" "}
            </div>
            <p>
              {formatFileSize(file.size)} &rarr;{" "}
              {!cf ? "loading" : formatFileSize(cf.size)} (
              {cf && calcSizeChange(file.size, cf.size)})
            </p>

            {cf && (
              <div>
                <p>Quality: {cf.quality}% </p>
                <p>{cf.type}</p>
                <StyledLink
                  onClick={e => e.stopPropagation()}
                  href={URL.createObjectURL(cf)}
                  download={createFileName(cf)}
                  title="Download compressed file"
                >
                  <DownloadSvg />
                </StyledLink>
              </div>
            )}
          </ListItem>
        );
      })}
    </List>
  );
};
