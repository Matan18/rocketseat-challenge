import Head from 'next/head';
import { Container } from '@pageStyles/home';
import { ProductList } from '@components/Templates/ProductList';

export default () => (
  <Container>
    <Head>
      <title>Capputeeno</title>
      <meta name="description" content="Loja Capputeeno" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ProductList />
  </Container>
);
