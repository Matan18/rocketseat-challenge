import { IProductItem } from '@types';
import {
  useContext, createContext, FC, useState, useEffect, Dispatch, SetStateAction,
} from 'react';
import { useRouter } from 'next/dist/client/router';
import { client } from '@services/api';
import { gql } from '@apollo/client';
import { ProductListType } from '@components/Atoms/ProductListTabFilter';

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
  meta: { count: number };
  params: IQueryParams<number>;
  pages: number;
  setParams: Dispatch<SetStateAction<IQueryParams<number>>>;
  previousPage: () => void;
  nextPage: () => void;
  selectedCategory: ProductListType;
  setSelectedCategory: Dispatch<SetStateAction<ProductListType>>;
};

const Context = createContext({} as IProductsContextData);

export const ProductsProvider: FC = ({ children }) => {
  const { query } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<ProductListType>('all');
  const [pages, setPages] = useState(0);
  const [fetchedProductData, setFetchedProductData] = useState<IProductDataResponse>({
    products: [],
    meta: { count: 0 },
  });
  const [params, setParams] = useState<IQueryParams<number>>({ page: 1 });

  const previousPage = () => {
    setParams((prev) => {
      if (!prev.page) return { ...prev, page: 1 };

      return (prev.page < 1 ? prev : {
        ...prev,
        page: prev.page - 1,
      });
    });
  };

  const nextPage = () => {
    setParams((prev) => {
      if (!prev.page) return { ...prev, page: 2 };
      return (prev.page === pages) ? prev : (
        {
          ...prev,
          page: prev.page + 1,
        }
      );
    });
  };

  useEffect(() => {
    const { page, category } = query as IQueryParams<string>;
    setParams((prev) => ({
      page: Number.isNaN(Number(page)) ? prev.page : Number(page),
      category: ['mugs', 't-shirts'].includes(`${category}`) ? category : undefined,
    }));
  }, [query]);

  useEffect(() => {
    setParams({
      page: 1,
      category: ['mugs', 't-shirts'].includes(`${selectedCategory}`)
        ? selectedCategory as 'mugs' | 't-shirts'
        : undefined,
    });
  }, [selectedCategory]);

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
    }).then((response) => {
      setFetchedProductData(response.data);
      setPages(Math.ceil(response.data.meta.count / 12));
    });
  }, [params, selectedCategory]);

  return (
    <Context.Provider value={{
      ...fetchedProductData,
      setParams,
      params,
      setSelectedCategory,
      selectedCategory,
      previousPage,
      nextPage,
      pages,
    }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProducts = (): IProductsContextData => {
  const context = useContext(Context);
  if (!context) throw new Error('You must use this function inside a React Function Component');
  return context;
};
