import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 0.5fr));
  grid-gap: 1rem;
`;

export const ListItem = styled.li`
  /* min-width: 20em; */
  border-radius: 0.75em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 1em;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    /* flex-wrap: wrap; */
  }
  div > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
  }
  button:hover {
    background-color: grey;
  }
`;
