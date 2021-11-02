import { IProduct } from '@types';
import Image from 'next/image';
import Link from 'next/link';
import { convertCurrency } from 'utils/currencyConversor';
import { Container } from './styles';

type Props = {
  product: IProduct;
}

export const ProductItem = ({ product }: Props) => (
  <Link href={`/products/${product.id}`} passHref>
    <Container>
      <Image
        src={product.image_url}
        width={256}
        height={300}
        layout="responsive"
        alt={product.name}
      />
      <div>
        <p>{product.name}</p>
        <hr />
        <b>{convertCurrency(product.price_in_cents)}</b>
      </div>
    </Container>
  </Link>
);
