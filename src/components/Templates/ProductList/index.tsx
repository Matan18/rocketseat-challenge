import { ProductListHeader } from '@components/Organisms/ProductListHeader';
import { ProductListContainer } from '@components/Organisms/ProductListContainer';

import { Container } from './styles';

export const ProductList = () => (
  <Container>
    <ProductListHeader />
    <ProductListContainer />
  </Container>
);
