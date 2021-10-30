import styled from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
}

export const Container = styled.fieldset<IContainerProps>`
  width: 35.2rem;
  max-height: 3em;
  position: relative;

  border: 0;
  border-radius: .8rem;

  font-size: 1.4rem;
  background-color: #F3F5F6;

  * {
    font-size: inherit;
  }

  legend {
    position: absolute;

    left: 1.6rem;
    top: ${(props) => (props.isFocused ? '-5' : '50')}%;
    line-height: 1em;

    color: #737380;

    transition: .5s;
    transform: translateY(-${(props) => (props.isFocused ? '100' : '50')}%);
  }

  label {
    position: relative;
    width: 100%;
    display: flex;
    align-items: stretch;

    input {
      width: 100%;
      background: none;
      padding: 1rem 3rem 1rem 1.6rem;

      border: 0;

      &::placeholder {
        width: 0;
      }
    }
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;

  * {
    height: 100% !important;
  }
`;
