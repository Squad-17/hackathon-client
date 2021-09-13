import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  .container-input {
    position: relative;
    width: 100%;
  }

  .icon-eye {
    position: absolute;
    z-index: 2;
    right: 1rem;
    top: 5rem;
    cursor: pointer;
    background: #fefefe;
  }
`;

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
