import styled from "styled-components";

export const Section = styled.section`
  padding: 1rem 0;
`;

export const Header = styled.header`
  padding: 1rem 0;
`;

export const Footer = styled.footer`
  padding: 1rem 0;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 60em;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  grid-gap: 1rem;
  text-align: center;
  padding: 5rem 0;
  border-top: 1px solid grey;
`;
