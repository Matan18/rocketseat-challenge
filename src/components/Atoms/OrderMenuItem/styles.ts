import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: inherit;
  flex: 1;
  width: 100%;
  padding: 0 1.6rem;

  border: none;
  background: none;

  &:hover {
    background: #73738011;
  }

  &:active {
    background: #73738001;
  }

  input:checked + label small {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  small {
    color: #737380;
    font-size: 1.4em;
    line-height: 157%;
  }

  &:hover {
    background: #73738011;
  }

  input {
    display: none;
  }
`;
