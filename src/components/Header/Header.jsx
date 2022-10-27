import { Container, Section } from "components/App/App.styled";
import { Logo } from "components";

export const Header = () => {
  return (
    <Section as="header">
      <Container>
        <Logo />
      </Container>
    </Section>
  );
};
