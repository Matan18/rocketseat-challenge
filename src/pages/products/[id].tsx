import { gql } from '@apollo/client';
import { Container } from '@pageStyles/product';
import { client } from '@services/api';
import { GetStaticPaths, GetStaticProps } from 'next';

export default () => <Container />;

type IProductItem = {
  id: string;
  name: string;
  category: 'mugs' | 't-shirts';
  image_url: string;
  description: string;
  price_in_cents: number;
};

type IGraphResponse = {
  product: IProductItem;
}

type IGraphQuery = {
  id: string;
};

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: 'blocking',
  paths: [],
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data: { product } } = await client.query<IGraphResponse, IGraphQuery>({
    query: gql`
    query FindProduct($id: ID!) {
      product: Product(id:$id){
        id
        name
        category
        image_url
        description
        price_in_cents
      }
    }
  `,
    variables: { id },
  });
  // eslint-disable-next-line no-console
  console.log(product);

  return {
    props: { product },
  };
};
