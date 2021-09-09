import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10rem;

  @media (max-width: 800px) {
    padding-top: 4rem;

    svg {
      display: none;
    }
  }
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
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
    font-size: ${theme.font.sizes.medium};

    span {
      color: ${theme.colors.secondary};
      cursor: pointer;
      font-weight: 900;
    }
  `}
`;
