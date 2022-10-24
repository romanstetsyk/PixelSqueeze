import { NoteList, StyledNote } from "./Note.styled";

export const Note = () => {
  return (
    <StyledNote>
      <p>Use desktop Chrome, Firefox, Opera, or Edge for optimal performance</p>
      <div>
        <div>
          <p>Not all browsers support this functionality. In particular:</p>
          <NoteList>
            <li>Chrome (Android) doesn't support the 'quality' parameter</li>
            <li>
              Safari (macOS and iOS) doesn't support the 'quality' parameter and
              converting to WebP type. PNG is used instead, which usually
              increases the file size
            </li>
          </NoteList>
        </div>
      </div>
    </StyledNote>
  );
};
