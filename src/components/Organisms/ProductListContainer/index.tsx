import { IProductItem } from '@types';

import { ProductItem } from '@components/Atoms/ProductItem';

import { PageNavigators } from '@components/Molecules/PageNavigators';
import { Container } from './styles';

type Props = {
  products: IProductItem[];
  pages: number;
};

export const ProductListContainer = ({ products, pages }: Props) => (
  <Container>
    <PageNavigators pages={pages} />
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
    <PageNavigators pages={pages} />
  </Container>
);
