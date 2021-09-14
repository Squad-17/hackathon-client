import styled, { css, DefaultTheme } from 'styled-components';

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

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

type DropdownProps = {
  isOpen: boolean;
};

const dropdownModifiers = {
  open: (theme: DefaultTheme) => css`
    ul {
      display: block;
      width: 100%;
      margin-top: 0.8rem;
      list-style: none;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: solid 0.1rem ${theme.colors.secondary};
      border-radius: 0.4rem;
      overflow: hidden;
      z-index: ${theme.layers.menu};
      background: #fefefe;

      li:hover {
        background: #e5e5e5;
      }

      li:not(:first-child) {
        border-top: solid 0.1rem #e5e5e5;
      }

      a {
        color: ${theme.colors.secondary};
        text-decoration: none;
        padding: 0.8rem;
        display: block;
        text-align: center;
      }
    }
  `,
};

export const Dropdown = styled.div<DropdownProps>`
  ${({ theme, isOpen }) => css`
    color: ${theme.colors.secondary};
    border: solid 0.1rem ${theme.colors.secondary};
    border-radius: 10rem;
    padding: 0.6rem ${theme.spacings.xsmall};
    cursor: pointer;
    position: relative;

    ul {
      display: none;
    }

    ${isOpen && dropdownModifiers.open(theme)}
  `}
`;

export const Language = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    margin-left: ${theme.spacings.small};

    @media (max-width: 400px) {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`;
