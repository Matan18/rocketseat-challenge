import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const Container = styled.section<Props>`
  width: 17.6em;
  font-size: 1rem;
  position: relative;

  label {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    small {
      margin-right: 1.6em;
    }

    &:hover {
      background: #73738011;
    }

    input {
      display: none;
    }
  }

  img {
    transform: rotate(${(props) => (props.isOpen ? 180 : 0)}deg);
  }

  small {
    color: #737380;
    font-size: 1.4em;
    line-height: 157%;
  }

  ul {
    position: absolute;

    padding: 1.2em 0;
    width: 100%;
    height: 13.3em;
    background: #FFFFFF;

    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: stretch;

    border-radius: .4em;

    li {
      width: 100%;

      + li {
        margin-top: 4px;
      }

      button {
        font-size: inherit;
        width: 100%;
        padding: 0 1.6rem;

        display: flex;
        justify-content: flex-start;

        border: none;
        background: none;

        &:hover {
          background: #73738011;
        }

        &:active {
          background: #73738001;
        }
      }
    }
  }
`;
