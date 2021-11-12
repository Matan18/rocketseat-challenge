import { Container } from './styles';

export type ProductListType = 't-shirts' | 'mugs' | 'all';

// eslint-disable-next-line no-unused-vars
type ChangeTypeFunction = (value: ProductListType) => void;

type Props = {
  id: ProductListType;
  name: string;
  text: string;
  checked: boolean;
  onChange: ChangeTypeFunction;
}

export const ProductListTabFilter = ({
  id,
  name,
  text,
  checked,
  onChange,
}: Props) => {
  const handleChange = () => {
    onChange(id);
  };

  return (
    <Container>
      <input
        id={id}
        name={name}
        type="radio"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{text.toUpperCase()}</label>
    </Container>
  );
};
