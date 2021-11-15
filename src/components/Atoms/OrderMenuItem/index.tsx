import { useProducts } from '@hooks/useProducts';
import { IMenuKey } from '@types';
import { Container } from './styles';

type Props = {
  id: IMenuKey;
  text: string;
};

export const OrderMenuItem = ({ id, text }: Props) => {
  const { selectedOrder, setSelectedOrder } = useProducts();
  const isChecked = selectedOrder === id;

  return (
    <Container>
      <input
        id={id}
        value={id}
        type="radio"
        name="order"
        checked={isChecked}
        onChange={() => setSelectedOrder(isChecked ? undefined : id)}
      />
      <label htmlFor={id}>
        <small>
          {text}
        </small>
      </label>
    </Container>
  );
};
