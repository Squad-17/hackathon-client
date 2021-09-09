import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`

    h1 {      
      font-size: 3.6rem;
      font-weight: 900☻;
      line-height: 3.6rem;
      font-family: Metropolis;

      margin: 8rem 0 6rem;
      color: ${theme.colors.primary}
    }

    .protocols {
      display: grid;
      row-gap: 3rem;
      column-gap: 5rem;
      list-style: none;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 34rem));
    }

    .protocol {
      padding: 2rem 6rem;
      background: #f3f4f9;
      border-radius: 21px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

      p {
        font-weight: 500;
        margin-top: 1rem;
        font-size: 1.6rem;
        line-height: 1.6rem;
        padding: 1.5rem 2rem;
        border-radius: 1.5rem;
        text-align: center;
        color: ${theme.colors.white};
      }

      p.orange {
        background: ${theme.colors.primary};
      }

      p.blue {
        background: ${theme.colors.secondary};
      }
    }
  `}
`;
