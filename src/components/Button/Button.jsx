import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";

export const Button = ({ children, onClick = null, type = "button" }) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
