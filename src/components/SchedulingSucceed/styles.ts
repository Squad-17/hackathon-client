import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 52.5rem;
    background: #fbfbfb;
    border: solid 0.2rem ${theme.colors.secondary};
    border-radius: 3rem;
    padding: 3.5rem;
    font-size: ${theme.font.sizes.medium};
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      margin-top: ${theme.spacings.medium};
      margin-bottom: ${theme.spacings.xlarge};
    }

    a {    
      text-decoration: none;
      font-size: ${theme.font.sizes.large};
    }

    button {
      min-width: 260px;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
  `}
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 2.5rem;
    justify-content: center;

    margin-top: auto;
`