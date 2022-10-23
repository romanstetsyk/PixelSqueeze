import styled from "styled-components";

export const DownloadDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-top: 2rem;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;

export const DownloadBtn = styled.button`
  max-width: fit-content;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0.75em;
  border: none;
  border-radius: 0.75em;
  :hover,
  :focus {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
