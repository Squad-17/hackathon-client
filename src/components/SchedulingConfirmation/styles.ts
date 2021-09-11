import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 52.5rem;
    background: #fbfbfb;
    border: solid 0.1rem ${theme.colors.secondary};
    border-radius: 1rem;
    padding: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
  `}
`;

export const Local = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    h3 {
      font-weight: lighter;
    }

    p {
      display: block;
      margin-top: ${theme.spacings.xxsmall};
      color: #5b5b5b;
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
      color: #5b5b5b;
    }
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.large};

    button:not(:first-child) {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;
