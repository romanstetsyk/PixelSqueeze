import styled from "styled-components";
import { position } from "styled-system";

export const Slider = styled.div`
  .slider {
    --divider-width: 1px;
    --default-handle-width: clamp(40px, 10vw, 200px);
    --default-handle-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
    --divider-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    transition: ${p => p.theme.transitions.ease200};
    transition-property: box-shadow;

    :focus {
      box-shadow: ${p => p.theme.shadows.boxNormal};
    }
  }
`;

export const FigCaption = styled("figcaption")(
  {
    background: p => p.theme.colors.white,
    border: p => p.theme.borders.thinSolid,
    borderColor: p => p.theme.colors.grayDarker,
    borderRadius: p => p.theme.radii.sm,
    padding: p => p.theme.space[3],
    lineHeight: p => p.theme.lineHeights.p100,
    color: p => p.theme.colors.primary,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    opacity: "0.8",
  },
  position
);
