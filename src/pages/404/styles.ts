import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${theme.spacings.xlarge};

    svg {
      margin-top: ${theme.spacings.xlarge};
    }

    a {
      display: block;
      text-decoration: none;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.secondary};
  `}
`;

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.xlarge};
    width: 100%;
    max-width: 50rem;

    a {
      width: 100%;
    }

    a:not(:first-child) {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;
