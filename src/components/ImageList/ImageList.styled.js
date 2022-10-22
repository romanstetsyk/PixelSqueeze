import styled from "styled-components";

export const List = styled.ul`
  /* background-color: red; */
`;

export const ListItem = styled.li`
  margin: 1rem 0;
  max-width: 40em;
  border: 1px solid black;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;
