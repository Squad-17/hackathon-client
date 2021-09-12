import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 52.5rem;
    background: #fbfbfb;
    border: solid 0.1rem ${theme.colors.secondary};
    border-radius: 1rem;
    padding: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};

    svg {
      max-width: 100%;
      margin-top: ${theme.spacings.medium};
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
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

    button {
      padding: 2.5rem 5rem;
    }
  `}
`;
