import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

  color: ${({ theme }) => theme.colors.neutral[900]};
`;
