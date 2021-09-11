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

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 8rem 12rem;
  background: #f3f4f9;
  border-radius: 21px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  .profile-avatar {
    margin-bottom: 5rem;
  }
`;

export const ProfileTag = styled.p`
  ${({ theme }) => css`
    color: #fff;
    padding: 1rem 1.5rem;
    border-radius: 11px;
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.medium};

    &.orange {
      background: ${theme.colors.primary};
    }

    &.blue {
      background: ${theme.colors.secondary};
    }
  `}
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
