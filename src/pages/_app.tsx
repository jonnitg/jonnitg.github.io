import { AppProps } from 'next/app';
import '../sass/main.scss';

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
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
};

export default App;
