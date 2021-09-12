import styled, { css } from 'styled-components';

export const Wrapper = styled.a`
  ${({ theme }) => css`
        color: ${theme.colors.secondary};
        font-size: medium;
        cursor: pointer;
        text-decoration: underline;
  `}

  @media (max-width: 800px) {
    padding-left: 10rem;
  }
`;
