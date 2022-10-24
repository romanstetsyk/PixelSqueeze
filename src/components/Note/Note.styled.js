import styled from "styled-components";

export const StyledNote = styled.div`
  font-size: 0.8em;
  font-style: italic;
  line-height: 1.5;

  & > p,
  & > div {
    display: flex;
    gap: 0.5em;
    flex-wrap: nowrap;

    :before {
      content: "*";
      vertical-align: top;
    }
  }
`;

export const NoteList = styled.ul`
  list-style-type: "- ";
  padding-left: 0.5em;
`;
