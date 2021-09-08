import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 7.5rem;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.primary};
  `}
`;

export const Menu = styled.div``;

export const Language = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
  `}
`;
