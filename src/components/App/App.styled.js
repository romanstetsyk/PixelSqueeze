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
} from "styled-system";

// export const Section = styled.section`
//   padding: 1rem 0;
// `;

// export const Header = styled.header`
//   padding: 1rem 0;
// `;

export const Footer = styled.footer`
  padding: 1rem 0;
`;

// export const Container = styled.div`
//   margin: 0 auto;
//   padding: 0 1rem;
//   max-width: 60em;
// `;

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

export const Container = styled("div")(
  {
    maxWidth: p => p.theme.sizes[240],
    paddingLeft: p => p.theme.space[4],
    paddingRight: p => p.theme.space[4],
    marginLeft: p => p.theme.space["auto"],
    marginRight: p => p.theme.space["auto"],
  },
  layout,
  flexbox
);

export const Section = styled("div")({
  paddingTop: p => p.theme.space[4],
  paddingBottom: p => p.theme.space[4],
  layout,
  flexbox,
});

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
    shadow
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

export const Icon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  fill: ${p => p.theme.colors.primary};

  :hover,
  :focus {
    fill: ${p =>
      p.effect === "remove" ? p.theme.colors.red : p.theme.colors.blue};
  }
`;
