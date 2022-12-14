import PropTypes from "prop-types";
import { Box } from "components/App/App.styled";

export const Card = ({ title, text }) => {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <h2>{title}</h2>
      <p>{text}</p>
    </Box>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
