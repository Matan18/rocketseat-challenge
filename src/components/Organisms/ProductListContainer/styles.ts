import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 3.2rem;
  z-index: 0;

  * {
    z-index: 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    row-gap: 2.2rem;
    column-gap: 3.2rem;
  }

  @media screen and (max-width: 830px){
    ul {
      column-gap: 2rem;
      justify-content: center;
    }
  }
`;
