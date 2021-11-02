import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1rem;

  z-index: 1;

  * {
    z-index: 1;
  }

  > ul {
    display: flex;
    align-items: center;

    li + li {
      margin-left: 4em;
    }
  }

  @media screen and (max-width: 768px) {
    > ul li + li {
      margin-left: 1.5em;
    }
  }
`;
