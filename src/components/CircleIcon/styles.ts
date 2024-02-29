import styled from "styled-components";

export const Container = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  padding: 0.5rem;

  background-color: ${({ $color }) => $color};

  width: fit-content;
`;
