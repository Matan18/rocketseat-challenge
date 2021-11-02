import { IProduct } from '@types';

import { ProductItem } from '@components/Atoms/ProductItem';

import { Container } from './styles';

type Props = {
  products: IProduct[];
};

export const ProductListContainer = ({ products }: Props) => (
  <Container>
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  </Container>
);
