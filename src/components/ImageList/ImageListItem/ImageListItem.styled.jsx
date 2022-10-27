import styled from "styled-components";

export const ListItem = styled.li`
  border-radius: ${p => p.theme.radii.sm};
  padding: ${p => p.theme.space[4]};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]};
  box-shadow: ${p =>
    p.active ? p.theme.shadows.active : p.theme.shadows.boxNormal};
  border: ${p => p.theme.borders.thinSolid};
  border-color: ${p =>
    p.active ? p.theme.colors.gray3 : p.theme.colors.transparent};
  transition: ${p => p.theme.transitions.ease200};
  transition-property: background-color;

  :hover {
    background-color: ${p => p.theme.colors.grayLightest};
  }
`;

export const FileName = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
