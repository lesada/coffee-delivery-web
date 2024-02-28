import * as RxToggleGroup from "@radix-ui/react-toggle-group";
import styled from "styled-components";

export const Item = styled(RxToggleGroup.Item)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1 0 9rem;

  padding: 1rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.neutral[400]};

  color: ${({ theme }) => theme.colors.neutral[700]};
  font-size: 0.75rem;
  text-transform: uppercase;

  border: 1px solid ${({ theme }) => theme.colors.neutral[400]};

  cursor: pointer;

  transition: all 0.2s ease;

  &[data-state="on"] {
    border: 1px solid ${({ theme }) => theme.colors.primary[100]};
    background-color: ${({ theme }) => theme.colors.primary[0]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[500]};
  }
`;

export const Group = styled(RxToggleGroup.Root)`
  display: flex;
  gap: 0.75rem;
`;
