import styled from "styled-components";

export const List = styled.ul`
  /* background-color: red; */
`;

export const ListItem = styled.li`
  margin: 1rem 0;
  max-width: 40em;
  /* border: 2px solid rgb(234, 216, 211); */
  border-radius: 0.75em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;
