import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  gap: 1rem;
  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  padding-left: ${p => p.theme.space[4]};
  padding-right: ${p => p.theme.space[4]};
  border: ${p => p.theme.borders.thinSolid};
  border-color: ${p => p.theme.colors.grayDarker};
  border-radius: ${p => p.theme.space[3]};
  cursor: pointer;

  input,
  select {
    border: ${p => p.theme.borders.none};
    border-bottom: ${p => p.theme.borders.thinSolid};
    border-color: ${p => p.theme.colors.grayDarker};
    text-align: center;
    height: ${p => p.theme.sizes[6]};
    padding: ${p => p.theme.space[0]};
    color: inherit;
  }
`;
