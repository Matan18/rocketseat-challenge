/* eslint-disable no-unused-vars */
export type IProductItem = {
  id: string;
  name: string;
  image_url: string;
  price_in_cents: number;
}

export type IProduct = IProductItem & {
  sales: number;
  category: string;
  created_at: string;
  description: string;
}

export type IMenuKey = 'news' | 'higher' | 'lower' | 'sellest';

export type IMenuItems = {
  key: IMenuKey;
  text: string;
};

export type ISortField = keyof IProduct;

export type ISortOrderType = 'asc' | 'dsc';

export type ISortValues = {
  field: ISortField;
  order: ISortOrderType;
}

export type ISortOrder = {
  [value in IMenuKey]: ISortValues;
}
