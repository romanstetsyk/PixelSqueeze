import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  grid-gap: 1rem;

  @media screen and (min-width: 40em) {
    grid-template-columns: repeat(auto-fit, minmax(15em, 0.5fr));
  }
`;

export const ListItem = styled.li`
  border-radius: 0.75em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 1em;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: ${props =>
    props.active ? "-5px 0px gray" : "rgba(0, 0, 0, 0.1) 0px 4px 12px"};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.active ? "grey" : "transparent")};

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
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
