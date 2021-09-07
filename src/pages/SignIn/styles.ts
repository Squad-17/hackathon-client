import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

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
