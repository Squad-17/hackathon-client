import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const InputWrapper = styled.div``;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.large};
    font-weight: 900;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spacings.xxsmall} 0;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    border: solid 0.1rem ${theme.colors.secondary};
    outline: none;
    border-radius: 0.4rem;
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;
