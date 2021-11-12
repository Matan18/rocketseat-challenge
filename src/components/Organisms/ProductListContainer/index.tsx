import { ProductItem } from '@components/Molecules/ProductItem';

import { PageNavigators } from '@components/Molecules/PageNavigators';
import { useProducts } from '@hooks/useProducts';
import { Container } from './styles';

export const ProductListContainer = () => {
  const { products } = useProducts();

  return (
    <Container>
      <PageNavigators />
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
      <PageNavigators />
    </Container>
  );
};
