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
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      margin-top: ${theme.spacings.medium};
      max-width: 100%;
    }

    a {
      margin-top: ${theme.spacings.xlarge};
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.large};
      text-align: center;
      text-decoration: underline;
      cursor: pointer;
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
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.large};

    a {
      text-decoration: none;
    }

    @media (max-width: 550px) {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;
