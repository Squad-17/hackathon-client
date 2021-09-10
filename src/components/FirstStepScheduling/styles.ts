import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 52.5rem;
    background: #fbfbfb;
    border: solid 0.1rem ${theme.colors.secondary};
    border-radius: 1rem;
    padding: ${theme.spacings.xsmall};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
  `}
`;

export const Locals = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-top: ${theme.spacings.large};

    .local {
      display: flex;
      justify-content: space-between;
      margin-top: ${theme.spacings.xsmall};
    }

    .select-wrapper {
      display: flex;
      align-items: center;
    }

    .city {
      margin-left: ${theme.spacings.xsmall};
    }

    .button {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
      border: 0;
      background: #f0f0f0;
      cursor: pointer;
      border: solid 0.1rem ${theme.colors.secondary};
    }

    .button-active {
      background: ${theme.colors.secondary};
    }
  `}
`;

export const Dates = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-top: ${theme.spacings.xlarge};

    .dates {
      display: flex;
      margin-top: ${theme.spacings.xsmall};
    }

    .date:not(:first-child) {
      margin-left: ${theme.spacings.small};
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .date-button {
      width: 5rem;
      height: 5rem;
      margin-top: ${theme.spacings.xsmall};
      padding: 1rem;
      border-radius: 50%;
      border: 0;
      color: ${theme.colors.primary};
      border: solid 0.1rem #c4c4c4;
      background: #c4c4c4;
      font-size: ${theme.font.sizes.large};
      cursor: pointer;

      &:hover {
        border: solid 0.1rem ${theme.colors.secondary};
      }
    }

    .date-available {
      background: transparent;
    }
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.large};
  `}
`;
