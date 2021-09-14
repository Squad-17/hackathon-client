import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  column-gap: 1.5rem;
  align-items: center;
  grid-template-columns: auto 1fr;

  padding: 1rem;
  background: #f3f4f9;
  border-radius: 21px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  a {
    color: #36357e;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.6rem;

    border: none;
    cursor: pointer;
    text-decoration-line: underline;
  }

  @media (max-width: 350px) {
    grid-template-columns: auto;
    max-width: 300px;
  }
`;

export const Day = styled.div`
  ${({ theme }) => css`
    display: block;
    padding: 2rem;

    font-size: 2rem;
    font-weight: 600;
    line-height: 2rem;

    border-radius: 50%;
    border: 3px solid #7474b4;
    color: ${theme.colors.primary};

    @media (max-width: 350px) {
      display: none;
    }
  `}
`;

export const LocalWrapper = styled.div`
  p {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #5a6575;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.6rem;

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
`;
