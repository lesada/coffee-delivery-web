import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.38rem;
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.Baloo};
  line-height: 130%;
  color: ${({ theme }) => theme.colors.neutral[800]};
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
  text-align: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  border-radius: 0.375rem 2.25rem;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  padding: 1.25rem;

  height: 21.2rem;
  width: 16rem;
  position: relative;
`;

export const ItemTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.Baloo};
  line-height: 130%;
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin: 1rem 0 0.5rem;
`;

export const ItemDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[600]};
  line-height: 130%;
  margin-bottom: 2rem;
`;

export const ItemTags = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
`;

export const Tag = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary[200]};
  background-color: ${({ theme }) => theme.colors.secondary[0]};
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;
  text-transform: uppercase;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -1.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 0.25rem solid ${({ theme }) => theme.colors.neutral[200]};
  box-shadow: 0 0.375rem 0.75rem rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.Baloo};
  font-weight: 800;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.neutral[700]};

  span {
    font-size: 0.875rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.Roboto};
    line-height: 130%;
  }
`;

export const CartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.375rem;
  padding: 0.5rem;

  background-color: ${({ theme }) => theme.colors.primary[200]};
`;
