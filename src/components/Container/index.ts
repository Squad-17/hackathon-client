import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  &.max-height {
    max-height: 100vh;
  }
`;

export default Container;