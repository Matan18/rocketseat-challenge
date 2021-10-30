import styled from 'styled-components';

export const Container = styled.li`
  input {
    display: none;
  }

  label {
    font-size: 1.6em;
    line-height: 1.37em;
    font-weight: 400;
    font-family: 'Saira';

    color: #737380;
  }

  input:checked + label {
    position: relative;
    font-weight: 600;

    color: #41414D;

    &::after {
      content: '';
      left: 0;
      bottom: -4px;
      position: absolute;
      height: 4px;
      width: 100%;
      background: #FFA585;
    }
  }
`;
