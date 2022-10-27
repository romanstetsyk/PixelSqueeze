import styled from "styled-components";

export const LogoLink = styled.a`
  display: inline-block;
  font-size: ${p => p.theme.fontSizes.logo};
  :hover {
    color: ${p => p.theme.colors.gray3};
  }
`;
