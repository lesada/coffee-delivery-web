import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  z-index: 99;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary[200]};
  line-height: 130%;

  background-color: ${({ theme }) => theme.colors.primary[0]};
  padding: 0.5rem;
  border-radius: 0.375rem;
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.secondary[0]};
  padding: 0.5rem;
  border-radius: 0.375rem;
  position: relative;
`;

export const QuantityItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.colors.secondary[200]};
  border-radius: 50%;
  min-width: 1.25rem;
  width: fit-content;
  padding: 0.25rem;

  font-weight: 700;
  font-size: 0.75rem;
  text-align: center;
  letter-spacing: -0.045rem;
  color: ${({ theme }) => theme.colors.neutral[0]};

  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`;
