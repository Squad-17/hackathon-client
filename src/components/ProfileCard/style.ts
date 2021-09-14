import styled, { css } from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 8rem 12rem;
  background: #f3f4f9;
  border-radius: 21px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 736px) {    
    display: grid;
    gap: 1rem;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: auto 1fr;
    
    padding: 1.5rem;
    background: none;
    box-shadow: none;
  }

  .profile-avatar-wrapper {
    position: relative;
    margin-bottom: 5rem;

    .camera-icon {
      width: 30px;
      height: 30px;

      right: 5px;
      bottom: 5px;
      position: absolute;
      pointer-events: none;
    }

    @media (max-width: 736px) {
      margin-bottom: 0;
      grid-row: 1 / 3;

      .camera-icon {
        display: none;
      }
    }
  }

  .profile-avatar {
    cursor: pointer;

    @media (max-width: 736px) {
      width: 7rem;
      height: 7rem;      
    }
  }

  .hide-mobile {
    @media (max-width: 736px) {
      display: none;
    }
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

    @media (max-width: 736px) {
      margin-bottom: 0;
      text-align: center;
    }
  `}
`;
