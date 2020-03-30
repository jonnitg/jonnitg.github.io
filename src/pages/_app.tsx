/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import '../sass/main.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
}

export default App;
