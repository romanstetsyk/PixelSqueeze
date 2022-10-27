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

  :hover {
    background-color: ${p => p.theme.colors.grayLightest};
  }
`;

export const FileName = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ButtonIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[0]};
  border: ${p => p.theme.borders.none};
  background: none;
  color: inherit;
  cursor: pointer;
`;
