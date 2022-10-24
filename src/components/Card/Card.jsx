import { StyledCard } from "./Card.styled";

export const Card = ({ title, text }) => {
  return (
    <StyledCard>
      <h2>{title}</h2>
      <p>{text}</p>
    </StyledCard>
  );
};
