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
`;

export const Wrapper = styled.div`
    max-width: 75rem;
    border-radius: 8px;
    background: #F3F4F9;
    padding: 2.5rem 6rem;
    border: 1px solid #6B6B6B;

  .avatars-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    list-style: none;

    img {
      width: 150px;
      height: 160px;
      cursor pointer;
      padding-bottom: 10px;

      &.selected {
        border-bottom: 1px solid red;
      }
    }
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
