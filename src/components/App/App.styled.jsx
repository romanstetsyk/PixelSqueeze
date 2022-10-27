import styled from "styled-components";
import {
  position,
  layout,
  flexbox,
  grid,
  space,
  border,
  color,
  background,
  shadow,
  compose,
  system,
  typography,
} from "styled-system";

export const Section = styled("div")(
  {
    paddingTop: p => p.theme.space[4],
    paddingBottom: p => p.theme.space[4],
  },
  layout,
  flexbox,
  space
);

const defaults = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] };

export const Box = styled("div")(
  compose(
    position,
    layout,
    flexbox,
    grid,
    space,
    border,
    color,
    background,
    shadow,
    typography
  ),
  system({
    gap: { property: "gap", scale: "space", defaultScale: defaults.space },
    rowGap: {
      property: "rowGap",
      scale: "space",
      defaultScale: defaults.space,
    },
    columnGap: {
      property: "columnGap",
      scale: "space",
      defaultScale: defaults.space,
    },
  })
);

export const Container = styled(Box)({
  maxWidth: p => p.theme.sizes[240],
  paddingLeft: p => p.theme.space[4],
  paddingRight: p => p.theme.space[4],
  marginLeft: p => p.theme.space["auto"],
  marginRight: p => p.theme.space["auto"],
});

export const Icon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  fill: ${p => p.theme.colors.primary};
  transition: ${p => p.theme.transitions.ease200};
  transition-property: fill;

  :hover,
  :focus {
    fill: ${p => p.theme.colors.blue};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[0]};
  border: ${p => p.theme.borders.none};
  background: none;
  color: inherit;
  cursor: pointer;

  :hover svg,
  :focus svg {
    fill: ${p => {
      switch (p.effect) {
        case "remove":
          return p.theme.colors.red;
        case "github":
          return p.theme.colors.gray3;
        default:
          return p.theme.colors.blue;
      }
    }};
  }
`;
