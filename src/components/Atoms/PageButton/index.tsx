import { ReactNode } from 'react';
import { Container } from './styles';

type Props = {
  onClick?: () => void;
  isSelect?: boolean;
  children: ReactNode;
}

export const PageButton = ({ children, isSelect = false, onClick }: Props) => (
  <Container isSelected={isSelect} onClick={onClick} type="button">
    {children}
  </Container>
);
