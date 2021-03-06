import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 52.5rem;
    background: #fbfbfb;
    border: solid 0.1rem ${theme.colors.secondary};
    border-radius: 1rem;
    padding: ${theme.spacings.xsmall};

    @media (max-width: 550px) {
      margin-bottom: ${theme.spacings.medium};
      height: auto;
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

export const Locals = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-top: ${theme.spacings.large};

    h3 {
      font-weight: lighter;
    }

    p {
      color: #5a6575;
    }

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

    .address {
      margin-left: ${theme.spacings.small};
      word-break: break-word;
    }

    .button {
      padding: 0.6rem;
      border-radius: 100%;
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
    margin-top: 6rem;

    h3 {
      font-weight: lighter;
      margin-bottom: 1.5rem;
    }

    p {
      color: #5a6575;
    }

    .dates {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      row-gap: 1.5rem;
      column-gap: 1.5rem;
    }

    .date:not(:first-child) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .date-button {
      width: 6rem;
      height: 6rem;
      margin-top: ${theme.spacings.xsmall};
      border-radius: 50%;
      color: ${theme.colors.primary};
      border: solid 0.1rem #c4c4c4;
      font-size: ${theme.font.sizes.large};
      cursor: pointer;
      background: transparent;
    }

    .button-disabled {
      background: #dfdfdf;
      color: #c4c4c4;
      pointer-events: none;
    }

    .date-available {
      &:hover {
        border: solid 0.1rem ${theme.colors.secondary};
      }

      &.date-selected {
        border: solid 0.3rem ${theme.colors.secondary};

        &:hover {
          border: solid 0.3rem ${theme.colors.secondary};
        }
      }
    }
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.xlarge};
  `}
`;

export const Error = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.medium};

    p {
      color: ${theme.colors.red};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
