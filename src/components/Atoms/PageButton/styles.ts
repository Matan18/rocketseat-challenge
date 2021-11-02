import styled from 'styled-components';

type Props = {
  isSelected: boolean;
}

export const Container = styled.button<Props>`
  & + & {
    margin-left: 2px;
  }
  width: 3.2rem;
  height: 3.2rem;

  border: ${(props) => (props.isSelected ? '1px solid #FFA585' : 0)};
  border-radius: .8rem;

  background-color: #E9E9F0;

  font-size: 1.6rem;
  font-weight: ${(props) => (props.isSelected ? 600 : 400)};

  color: ${(props) => (props.isSelected ? '#FFA585' : '#737380')};
`;
