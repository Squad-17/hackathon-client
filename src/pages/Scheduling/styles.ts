import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    margin-top: ${theme.spacings.xlarge};
  `}
`;

export const SchedulingWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`;
