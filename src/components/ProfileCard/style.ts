import styled, { css } from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 8rem 12rem;
  background: #f3f4f9;
  border-radius: 21px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  .profile-avatar {
    cursor: pointer;
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
