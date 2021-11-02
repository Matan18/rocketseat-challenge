import { ProductItem } from '@components/Atoms/ProductItem';

import { PageNavigators } from '@components/Molecules/PageNavigators';
import { useProducts } from '@hooks/useProducts';
import { Container } from './styles';

export const ProductListContainer = () => {
  const { products, meta: { count } } = useProducts();

  const pages = count / 12;

  return (
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
};
