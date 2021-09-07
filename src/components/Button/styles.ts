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
  `}
`;
