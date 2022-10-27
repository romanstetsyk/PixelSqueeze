import { ButtonStyled } from "./Button.styled";

export const Button = ({ children, onClick = null, type = "button" }) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
