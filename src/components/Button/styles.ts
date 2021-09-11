import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    width: 15rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    cursor: pointer;
    border-radius: 0.4rem;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};

    &.outlined {
      background: none;
      color: ${theme.colors.secondary};
      border: 2px solid ${theme.colors.secondary};
    }

    &.bigButtonWhite {
      background-color: ${theme.colors.white};
      color: ${theme.colors.secondary};
      border: 1px solid ${theme.colors.secondary};
      width: 100%;
      margin-bottom: 1rem;
    }

    &.bigButtonOrange {
      width: 100%;
    }

  `}
`;
