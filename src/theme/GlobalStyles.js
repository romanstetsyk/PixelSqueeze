import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body {
    /* font-family: "Roboto", sans-serif; */
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.normal};
    color: ${p => p.theme.colors.primary};;
    line-height: ${p => p.theme.lineHeights.body};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure {
    margin: ${p => p.theme.space[0]};
  }

  ul,
  ol {
    margin: ${p => p.theme.space[0]};
    padding: ${p => p.theme.space[0]};
  }

  img {
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
