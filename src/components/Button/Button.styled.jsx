import styled from "styled-components";

export const ButtonStyled = styled.button`
  cursor: pointer;
  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  padding-left: ${p => p.theme.space[4]};
  padding-right: ${p => p.theme.space[4]};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  color: inherit;
  background-color: ${p => p.theme.colors.grayLight};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: inherit;
  transition: ${p => p.theme.transitions.ease200};
  transition-property: background-color;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.grayDarker};
  }
`;
