import { Box } from "components/App/App.styled";

export const Note = () => {
  return (
    <Box as="ul" fontSize="small" fontStyle="italic" p={4}>
      <li>
        Use desktop Chrome, Firefox, Opera, or Edge for optimal performance
      </li>
      <li>
        <p>Not all browsers support this functionality. In particular:</p>
        <Box as="ul" pl={4}>
          <li>Chrome (Android) doesn't support the 'quality' parameter</li>
          <li>
            Safari (macOS and iOS) doesn't support the 'quality' parameter and
            converting to WebP type. PNG is used instead, which usually
            increases the file size
          </li>
        </Box>
      </li>
    </Box>
  );
};
