import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 2.7rem;
  position: relative;

  > *,
  .bagCount {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bagCount {
    width: 1.7rem;
    height: 1.7rem;
    color: #FFFFFF;

    font-size: 1rem;
    font-weight: 500;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.others.delete};

    right: 0;
    bottom: 0;
    position: absolute;
    transform: translate(50%, 50%);
  }
`;
