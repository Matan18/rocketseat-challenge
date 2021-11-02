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
