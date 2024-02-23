import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  height: 2.375rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.neutral[400]};

  button {
    padding: 0.25rem;
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  width: 1.25rem;
  text-align: center;
  line-height: 130%;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary[100]};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;
