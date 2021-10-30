import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@globalStyles/theme';
import { Header } from '@molecules/Header';
import { GlobalStyles } from '@globalStyles/globalStyles';

export default ({
  Component,
  pageProps,
}: AppProps) => (
  <ThemeProvider theme={theme}>
    <Header />
    <Component {...pageProps} />
    <GlobalStyles />
  </ThemeProvider>
);
