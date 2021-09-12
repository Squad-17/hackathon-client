import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80vh;

  @media (max-width: 800px) {
    padding-top: 4rem;
    
    img, svg {
      display: none;
    }
  }
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-weight: 900;
    font-size: 3.6rem;
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
    padding-bottom: 3rem;
  }
`;

export const CallSignIn = styled.div`
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
      font-weight: 900;
    }
  `}
`;
