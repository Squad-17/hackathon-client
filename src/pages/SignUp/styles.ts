import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

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
