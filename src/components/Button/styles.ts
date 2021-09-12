import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 3.rem;
    font-weight: 900;
    line-height: 3rem;

    border: 0;
    padding: 3rem;
    cursor: pointer;
    border-radius: 0.8rem;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};

    &.outlined {
      background: none;
      color: ${theme.colors.secondary};
      border: 2px solid ${theme.colors.secondary};
    }

    &.big-button {
      width: 100%;
    }
  `}
`;
