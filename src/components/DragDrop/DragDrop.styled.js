import styled from "styled-components";
import { BsUpload } from "react-icons/bs";

const getColor = props => {
  if (props.isDragAccept) {
    return {
      bgColor: "rgb(83, 164, 81, 0.3)",
      borderColor: "rgb(83, 164, 81)",
    };
  }
  if (props.isDragReject) {
    return { bgColor: "rgb(249, 241, 243)", borderColor: "red" };
  }
  if (props.isFocused) {
    return { bgColor: "rgba(0, 0, 0, 0.1)", borderColor: "black" };
  }
  return "#fafafa";
};

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2em;
  margin: 2em 0;
  border: 1px dashed gray;
  border-radius: 0.75rem;
  background-color: ${props => getColor(props).bgColor};
  border-color: ${props => getColor(props).borderColor};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  :focus svg {
    fill: blue;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Browse = styled.button`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.75em;
  border: none;
  border-radius: 0.75em;
  :hover,
  :focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const UploadSvg = styled(BsUpload)`
  width: 20px;
  height: 20px;

  :focus {
    fill: blue;
  }
`;
