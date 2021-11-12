import { IProductItem } from '@types';
import Image from 'next/image';
import Link from 'next/link';
import { ProductPrice } from '../ProductPrice';
import { Container } from './styles';

type Props = {
  product: IProductItem;
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
        <ProductPrice price={product.price_in_cents} />
      </div>
    </Container>
  </Link>
);
