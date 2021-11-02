import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@globalStyles/theme';
import { Header } from '@molecules/Header';
import { GlobalStyles } from '@globalStyles/globalStyles';
import { ProductsProvider } from '@hooks/useProducts';

export default ({
  Component,
  pageProps,
}: AppProps) => (
  <ProductsProvider>
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  </ProductsProvider>
);
