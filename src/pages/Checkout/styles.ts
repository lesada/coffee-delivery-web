import styled from "styled-components";

export const Container = styled.main`
  form {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  max-width: 35rem;
  width: 100%;
  min-width: 20rem;
`;

export const SectionTitle = styled.div`
  h1,
  h2 {
    color: ${({ theme }) => theme.colors.neutral[800]};
    font-family: ${({ theme }) => theme.fonts.Baloo};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.94rem;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  h3 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutral[800]};
    line-height: 130%;
    font-weight: 400;
  }

  h4 {
    color: ${({ theme }) => theme.colors.neutral[700]};
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem 0.75rem;
`;

export const Box = styled.div<{ $spanColumns?: number }>`
  position: relative;
  ${({ $spanColumns }) => $spanColumns && `grid-column: span ${$spanColumns};`}
`;

export const Input = styled.input`
  display: flex;
  align-items: center;

  padding: 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral[400]};
  background-color: ${({ theme }) => theme.colors.neutral[300]};

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.neutral[700]};
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[600]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary[200]};
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.secondary[200]};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
`;
