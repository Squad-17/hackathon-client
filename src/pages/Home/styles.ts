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
  display: grid;
  height: 100vh;
  max-height: 100vh;

  padding-bottom: 13rem;

  > button {
    margin-top: 5rem;
    margin-left: auto;
    display: inline-block;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
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
