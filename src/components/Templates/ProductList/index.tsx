import { useEffect, useState } from 'react';
import { client } from '@services/api';
import { gql } from '@apollo/client';

import { IProduct } from '@types';

import { ProductListHeader } from '@components/Organisms/ProductListHeader';
import { ProductListContainer } from '@components/Organisms/ProductListContainer';

import { Container } from './styles';

export const ProductList = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);

  useEffect(() => {
    client.query<{ allProducts: IProduct[] }>({
      query: gql`
      {
        allProducts {
          id
          name
          image_url
          price_in_cents
        }
      }
    `,
    }).then((response) => setProductList(response.data.allProducts));
  }, []);

  return (
    <Container>
      <ProductListHeader />
      <ProductListContainer products={productList} />
    </Container>
  );
};
