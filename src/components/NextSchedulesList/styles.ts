import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: #fbfbfb;
    padding: 5rem 3rem;
    border-radius: 3rem;
    border: solid 2px ${theme.colors.secondary};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 3rem;
    margin-bottom: 1rem;
    color: ${theme.colors.secondary};
  `}
`;
