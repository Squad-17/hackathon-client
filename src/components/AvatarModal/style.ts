import styled from "styled-components";

export const Mask = styled.div`
  position: fixed;
  inset: 0;

  display: none;
  place-items: center;

  z-index: 3;
  background: rgba(0, 0, 0, 0.3);

  &.active {
    display: grid;
  }

  @media(max-width: 736px) {
    padding: 0 1rem;
  }
`;

export const Wrapper = styled.div`
    max-width: 75rem;
    border-radius: 8px;
    background: #F3F4F9;
    padding: 2.5rem 6rem;
    border: 1px solid #6B6B6B;

  .avatars-list {
    gap: 2rem;
    display: grid;
    list-style: none;
    grid-template-columns: 1fr 1fr 1fr;

    img {
      width: 100%;
      cursor pointer;
      max-width: 150px;
      padding-bottom: 10px;

      &.selected {
        border-bottom: 1px solid red;
      }
    }
  }

  @media(max-width: 736px) {
    padding: 2.5rem 4rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 3rem;
  justify-content: space-between;

  margin-top: 3rem;

  button {
    font-weight: bold;
    font-size: 3.4rem;
    line-height: 3.4rem;
    padding: 3rem;
  }
`;
