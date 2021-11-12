import { convertCurrency } from 'utils/currencyConversor';
import { Price } from './styles';

type Props = {
  price: number;
};

export const ProductPrice = ({ price }: Props) => <Price>{convertCurrency(price)}</Price>;
