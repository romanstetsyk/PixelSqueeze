import styled from "styled-components";

export const Section = styled.section`
  padding: 1rem 0;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;

  @media all and (min-width: 75em) {
    max-width: 60em;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;
