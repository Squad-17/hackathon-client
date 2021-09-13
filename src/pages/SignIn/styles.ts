import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding-top: 4rem;
  padding-bottom: 5rem;
  width: 100%;

  img {
    width: 50%;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 800px) {
    justify-content: center;

    img {
      display: none;
    }
  }
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-weight: 900;
    font-size: 3.2rem;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.large};
  `}
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 40rem;
  margin-left: 10rem;

  @media (max-width: 900px) {
    margin-left: 5rem;
  }

  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

export const ForgotPassword = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    color: #333333;
    margin-top: 5rem;
    font-weight: 500;
    font-size: 2rem;

    span {
      color: ${theme.colors.secondary};
      cursor: pointer;
    }
  `}
`;
