import styled, { css } from "styled-components";

export const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  list-style: none;
`;

export const Step = styled.li`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: #c4c4c4;

    &.active {
      background: ${theme.colors.primary};
    }
  `}
`;

export const Connector = styled.li`
  height: 1px;
  flex-grow: 1;
  background: #c4c4c4;
`;
