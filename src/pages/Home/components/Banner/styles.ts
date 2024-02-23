import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  flex-wrap: wrap-reverse;

  padding: 6rem 0 8.75rem;
  position: relative;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 400px;

  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.Baloo};
  color: ${({ theme }) => theme.colors.neutral[900]};
  line-height: 130%;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[800]};
  line-height: 130%;
  margin-bottom: 4rem;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 400px;

  img {
    width: 100%;
    height: auto;
  }

  z-index: 1;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.15;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1.25rem 2.5rem;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.neutral[700]};
  line-height: 130%;
`;
