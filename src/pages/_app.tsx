import { AppProps } from 'next/app';
import Head from 'next/head';
import '../sass/main.scss';

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="hidden-on-landscape">
        <div className="hidden-on-landscape__container">
          <h1 className="hidden-on-landscape__heading">
            It&apos;s not broken, just unsupported
          </h1>
          <p className="hidden-on-landscape__helper-text">
            Please, flip the device
          </p>
        </div>
      </div>
      <Component {...pageProps} />
    </>
  );
};

export default App;
