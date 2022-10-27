import { BsGithub } from "react-icons/bs";
import { Box, Container, Icon, Section } from "components/App/App.styled";
import { Note } from "./Note";

export const Footer = () => {
  return (
    <Section>
      <Container>
        <Note />

        <Box
          as="a"
          href="https://github.com/"
          target="_blank"
          aria-label="GitHub"
          rel="noreferrer noopener"
          maxWidth="maxContent"
          mx="auto"
          my={4}
          display="block"
        >
          <Icon as={BsGithub} effect="github" />
        </Box>
      </Container>
    </Section>
  );
};
