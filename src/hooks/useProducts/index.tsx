import { IProductItem } from '@types';
import {
  useContext, createContext, FC, useState, useEffect, Dispatch, SetStateAction,
} from 'react';
import { useRouter } from 'next/dist/client/router';
import { client } from '@services/api';
import { gql } from '@apollo/client';

type IProductDataResponse = {
  products: IProductItem[],
  meta: { count: number }
};

type IQueryParams<T extends number | string> = {
  page?: T;
  category?: 'mugs' | 't-shirts';
};

type IProductsContextData = {
  products: IProductItem[];
  meta: { count: number },
  setParams: Dispatch<SetStateAction<IQueryParams<number>>>
};

const Context = createContext({} as IProductsContextData);

export const ProductsProvider: FC = ({ children }) => {
  const { query } = useRouter();
  const [fetchedProductData, setFetchedProductData] = useState<IProductDataResponse>({
    products: [],
    meta: { count: 0 },
  });
  const [params, setParams] = useState<IQueryParams<number>>({ page: 1 });

  useEffect(() => {
    const { page, category } = query as IQueryParams<string>;
    setParams((prev) => ({
      page: Number.isNaN(Number(page)) ? prev.page : Number(page),
      category,
    }));
  }, [query]);

  useEffect(() => {
    const { page, category } = params;

    client.query<IProductDataResponse, IQueryParams<number>>({
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
        page,
      },
    }).then((response) => setFetchedProductData(response.data));
  }, [params]);

  return (
    <Context.Provider value={{ ...fetchedProductData, setParams }}>
      {children}
    </Context.Provider>
  );
};

export const useProducts = (): IProductsContextData => {
  const context = useContext(Context);
  if (!context) throw new Error('You must use this function inside a React Function Component');
  return context;
};
