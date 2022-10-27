import styled from "styled-components";

const getColor = props => {
  if (props.isDragAccept) {
    return {
      bgColor: props.theme.colors.success,
      borderColor: props.theme.colors.success,
    };
  }
  if (props.isDragReject) {
    return {
      bgColor: props.theme.colors.pinkPale,
      borderColor: props.theme.colors.red,
    };
  }
  if (props.isFocused) {
    return {
      bgColor: props.theme.colors.grayLightest,
      borderColor: props.theme.colors.black,
    };
  }
  return {
    bgColor: props.theme.colors.body,
    borderColor: props.theme.colors.gray3,
  };
};

export const StyledDiv = styled.div`
  padding: ${p => p.theme.space[8]};
  margin-top: ${p => p.theme.space[8]};
  margin-bottom: ${p => p.theme.space[8]};
  border: ${p => p.theme.borders.thinDashed};
  border-radius: ${p => p.theme.radii.sm};
  border-color: ${p => getColor(p).borderColor};
  background-color: ${p => getColor(p).bgColor};
  box-shadow: ${p => p.theme.shadows.boxNormal};
  cursor: pointer;

  :hover {
    background-color: ${p => p.theme.colors.grayLightest};
  }
  :focus svg {
    fill: ${p => p.theme.colors.blue};
  }
`;
