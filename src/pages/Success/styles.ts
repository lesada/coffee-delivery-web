import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding-top: 4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;

  svg {
    width: 100%;
    max-width: 25rem;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.Baloo};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary[200]};
  font-weight: 800;
`;

export const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.neutral[800]};
  font-weight: 400;
  line-height: 130%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border: 1px solid ${({ theme }) => theme.colors.primary[200]};
  padding: 2.5rem;
  width: min(32.875rem, 100%);
  border-radius: 0.375rem 2.25rem;
  margin-top: 2.5rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  width: min(32.875rem, 100%);
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutral[700]};
    line-height: 130%;
  }
`;
