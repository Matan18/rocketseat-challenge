import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { client } from '@services/api';
import { gql } from '@apollo/client';

import { IProductItem } from '@types';

import { ProductListHeader } from '@components/Organisms/ProductListHeader';
import { ProductListContainer } from '@components/Organisms/ProductListContainer';

import { Container } from './styles';

type IProductData = {
  products: IProductItem[],
  meta: { count: number }
};

type IQueryParams<T extends number | string> = {
  page?: T;
  category?: 'mugs' | 't-shirts';
};

export const ProductList = () => {
  const { query } = useRouter();
  const [fetchedProductData, setFetchedProductData] = useState<IProductData>({
    products: [],
    meta: { count: 0 },
  });

  useEffect(() => {
    const { page, category } = query as IQueryParams<string>;

    client.query<IProductData, IQueryParams<number>>({
      query: gql`
      query GetAllProduct($page: Int! = 1, $category: String) {
        products: allProducts(page: $page, perPage: 12, filter: {category: $category}) {
          id
          name
          image_url
          price_in_cents
        }
        meta: _allProductsMeta(page: $page, perPage: 3, filter: {category: $category}) {
          count
        }
      }
    `,
      variables: {
        category,
        page: Number.isNaN(Number(page)) ? 1 : Number(page),
      },
    }).then((response) => setFetchedProductData(response.data));
  }, [query]);

  return (
    <Container>
      <ProductListHeader />
      <ProductListContainer
        products={fetchedProductData.products}
        pages={Math.ceil(fetchedProductData.meta.count / 12)}
      />
    </Container>
  );
};
