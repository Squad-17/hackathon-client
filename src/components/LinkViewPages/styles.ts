import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    a {
      color: ${theme.colors.secondary};
      font-size: medium;
      cursor: pointer;
      text-decoration: underline;
    }
  `}
`;
