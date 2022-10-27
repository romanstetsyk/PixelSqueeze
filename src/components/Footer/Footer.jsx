import { BsGithub } from "react-icons/bs";
import {
  Box,
  Container,
  Icon,
  IconContainer,
  Section,
} from "components/App/App.styled";
import { Note } from "./Note";

export const Footer = () => {
  return (
    <Section>
      <Container>
        <Note />

        <Box display="block" mx="auto" maxWidth="maxContent">
          <IconContainer
            effect="github"
            as="a"
            href="https://github.com/"
            target="_blank"
            aria-label="GitHub"
            rel="noreferrer noopener"
            maxWidth="maxContent"
          >
            <Icon as={BsGithub} />
          </IconContainer>
        </Box>
      </Container>
    </Section>
  );
};
