import styled from 'styled-components';

export const Container = styled.a`
  width: 100%;
  max-width: 256px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px);
  border-radius: 1.2rem;

  overflow: hidden;

  cursor: pointer;

  img {
    aspect-ratio: 256 / 300;
  }

  div {
    margin: .8rem 1.6rem .8rem 1.2rem;

    > * + * {
      margin-top: .8rem;
    }
  }



  hr {
    height: 1px;
    width: 100%;
    background: #DCE2E6;
  }

  p {
    color: #41414D;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 1.5em;
  }

  b {
    color: #09090A;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.5em;
  }
`;
