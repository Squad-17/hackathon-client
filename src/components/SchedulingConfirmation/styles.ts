import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 52.5rem;
    background: #fbfbfb;
    border: solid 0.2rem ${theme.colors.secondary};
    border-radius: 3rem;
    padding: 3.5rem 2rem;
    font-size: ${theme.font.sizes.medium};

    text-align: center;

    display: flex;
    flex-direction: column;

    @media (max-width: 550px) {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: auto;
  `}
`;

export const Local = styled.div`
  ${({ theme }) => css`
    h3 {
      font-weight: lighter;
    }

    p {
      display: block;
      margin-top: ${theme.spacings.xxsmall};
      color: #5a6575;
    }
  `}
`;

export const Date = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    h3 {
      font-weight: lighter;
    }

    p {
      display: block;
      margin-top: ${theme.spacings.xxsmall};
      color: #5a6575;
    }
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1.6rem;
    justify-content: center;

    margin-top: auto;

    button {
      min-width: 260px;
      max-width: 300px;
    }
  `}
`;
