import styled from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
}

export const Container = styled.fieldset<IContainerProps>`
  max-width: 352px;
  max-height: 42px;
  margin-top: 40px;
  background-color: #F3F5F6;
  border: 0;
  border-radius: 8px;
  position: relative;

  legend {
    line-height: 1em;
    transition: .5s;
    left: 16px;
    position: absolute;
    top: ${(props) => (props.isFocused ? '-5' : '50')}%;
    transform: translateY(-${(props) => (props.isFocused ? '100' : '50')}%);
  }

  label {
    width: 100%;
    display: flex;
    position: relative;
    align-items: stretch;

    input {
      width: 100%;
      border: 0;
      background: none;
      padding: 10px 30px 10px 16px;

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
