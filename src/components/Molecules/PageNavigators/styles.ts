import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  .left {
    transform: rotate(90deg);
  }
  .right {
    transform: rotate(-90deg);
  }
`;
