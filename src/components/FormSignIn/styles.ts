import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const FormError = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-bottom: ${theme.spacings.small};

    p {
      color: ${theme.colors.red};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin: ${theme.spacings.medium} 0;
  `}
`;
