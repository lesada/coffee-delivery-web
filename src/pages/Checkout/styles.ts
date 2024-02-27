import styled from "styled-components";

export const Container = styled.main`
  form {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
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
