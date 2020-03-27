/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import '../sass/main.scss';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
