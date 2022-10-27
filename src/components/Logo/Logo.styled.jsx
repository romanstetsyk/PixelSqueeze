import styled from "styled-components";

export const LogoLink = styled.a`
  display: inline-block;
  font-size: ${p => p.theme.fontSizes.logo};
  transition: ${p => p.theme.transitions.ease200};
  transition-property: color;

  :hover {
    color: ${p => p.theme.colors.gray3};
  }
`;
