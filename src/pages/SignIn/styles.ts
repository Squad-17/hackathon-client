import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 800px) {
    padding-top: 4rem;

    svg {
      display: none;
    }
  }
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
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

export const CallSignUp = styled.div`
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