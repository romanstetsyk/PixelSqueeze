import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  grid-gap: ${p => p.theme.space[4]};

  @media screen and (min-width: 40em) {
    grid-template-columns: repeat(auto-fit, minmax(16em, 0.5fr));
  }
`;
