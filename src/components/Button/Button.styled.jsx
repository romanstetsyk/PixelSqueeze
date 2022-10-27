import styled from "styled-components";

export const ButtonStyled = styled.button`
  cursor: pointer;
  padding: ${p => p.theme.space[3]};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  color: inherit;
  background-color: ${p => p.theme.colors.grayLight};
  font-weight: ${p => p.theme.fontWeights.normal};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.grayDarker};
  }
`;
