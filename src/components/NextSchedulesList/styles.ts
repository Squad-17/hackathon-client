import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: #fbfbfb;
    padding: 5rem 4rem;
    border-radius: 3rem;
    background: #fbfbfb;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

    .link-agendar {
      font-size: 3rem;
      font-weight: 900;
      line-height: 3rem;

      display: block;
      width: min-content;
      margin: 5rem auto 0;
      padding: 2rem 4rem;
      border-radius: 0.8rem;
      text-decoration: none;

      background: #fe662e;
      color: ${theme.colors.white};
      transition: 0.3s;

      &:hover {
        background: ${theme.colors.primary};
      }
    }

    @media (max-width: 736px) {
      padding: 2rem 0;
      background: none;
      box-shadow: none;

      .link-agendar {
        margin: 2rem auto 0;
      }
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: ${theme.colors.secondary};
  `}
`;
