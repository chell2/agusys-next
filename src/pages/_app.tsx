import '../styles/globals.css';
import { Provider } from 'next-auth/client';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
export default MyApp;
