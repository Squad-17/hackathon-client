import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: 900;
    font-size: 3.6rem;
    line-height: 3.6rem;
    margin-bottom: 5rem;
    color: ${theme.colors.primary};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    height: 100vh;
    max-height: 100vh;

    padding-bottom: 13rem;    
  `}
`;

export const GridWrapper = styled.div`
  display: grid;
  align-items: center;
  column-gap: 10rem;
  grid-template-columns: auto 1fr;
`;

export const PageScrollCircleList = styled.ul`
  display: flex;
  row-gap: 2.5rem;
  list-style: none;
  flex-direction: column;

  position: fixed;
  right: 15rem;
  top: 50%;
  // transform: translateY(-50%);
`;

export const PageScrollCircle = styled.li`
  ${({ theme }) => css`
    width: 25px;
    height: 25px;
    cursor: pointer;
    border-radius: 50%;
    background: #c4c4c4;

    &.active {
      background: ${theme.colors.primary};
    }
  `}
`;
