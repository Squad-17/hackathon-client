import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

export const InputWrapper = styled.div``;

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 900;
    margin-bottom: 5px;
    color: ${theme.colors.secondary};
  `}
`;

type InputProps = {
  error?: string;
};

export const Input = styled.input<InputProps>`
  ${({ theme, error }) => css`
    width: 100%;
    height: 4rem;
    padding: ${theme.spacings.small} ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.medium};
    margin: ${theme.spacings.xxsmall} 0;
    border: solid 0.1rem ${theme.colors.secondary};
    outline: none;
    border-radius: 0.7rem;

    border: ${!!error && `solid 0.2rem ${theme.colors.red}`};
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;
