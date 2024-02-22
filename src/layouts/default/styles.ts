import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
  height: 100%;
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  color: ${({ theme }) => theme.colors.neutral[900]};
  background-color: ${({ theme }) => theme.colors.neutral[100]};
`;
