import styled from "styled-components";
import "img-comparison-slider";

export const ComparisonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 2em 1em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 0.75em;
`;

export const ChangeBtn = styled.button`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.75em;
  border: none;
  border-radius: 0.75em;
  :hover,
  :focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
export const Label = styled.label`
  padding: 0.75em;
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 0.75em;
  :hover {
    background-color: rgb(0, 0, 0, 0.05);
  }

  input,
  select {
    display: inline-block;
    border: none;
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);
    text-align: center;
  }
`;
