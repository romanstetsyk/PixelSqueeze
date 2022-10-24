import styled from "styled-components";
import { BsDownload, BsTrash } from "react-icons/bs";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  grid-gap: 1rem;

  @media screen and (min-width: 40em) {
    grid-template-columns: repeat(auto-fit, minmax(16em, 0.5fr));
  }
`;

export const ListItem = styled.li`
  border-radius: 0.75em;
  padding: 1em;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: ${props =>
    props.active
      ? "3px 0px gray inset, rgba(0, 0, 0, 0.1) 0px 4px 12px"
      : "rgba(0, 0, 0, 0.1) 0px 4px 12px"};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.active ? "grey" : "transparent")};

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  div {
    display: flex;
    justify-content: space-between;
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
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;
  }
  button:hover svg {
    fill: red;
  }
`;

export const RemoveSvg = styled(BsTrash)`
  width: 20px;
  height: 20px;
`;

export const DownloadSvg = styled(BsDownload)`
  width: 20px;
  height: 20px;
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  :hover svg {
    fill: blue;
  }
`;
