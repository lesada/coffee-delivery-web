import styled, { css } from "styled-components";

export const Container = styled.div`
  border-radius: 0.375rem 2.75rem;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  width: 28rem;
  border-radius: 0.375rem 2.75rem;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
`;

export const CartItem = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;

  padding: 0.5rem 0.25rem;
`;

export const CartItemImage = styled.div`
  width: 4rem;
  height: 4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  flex: 1;
`;

export const CartItemName = styled.h5`
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.neutral[800]};
`;

export const CartItemPrice = styled.p`
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-size: 1rem;

  line-height: 130%;
  font-weight: 700;
  text-align: right;
`;

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.secondary[100]};
  padding: 0.75rem 0.5rem;

  font-weight: 700;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.neutral[0]};
  text-transform: uppercase;
  line-height: 160%;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary[200]};
  }
`;

export const Line = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[400]};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  background-color: ${({ theme }) => theme.colors.neutral[400]};
  padding: 0 0.5rem;
  height: 100%;
  border-radius: 0.375rem;
  text-transform: uppercase;

  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.neutral[700]};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[500]};
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Bold = css`
  font-weight: 700;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

export const InfoLabel = styled.p<{ $bold?: boolean }>`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[700]};

  ${({ $bold }) => $bold && Bold}
`;

export const InfoValue = styled.p<{ $bold?: boolean }>`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[700]};
  text-align: right;

  ${({ $bold }) => $bold && Bold}
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
