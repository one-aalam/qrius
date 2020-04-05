import { AppProps } from 'next/app';

import '../public/reset.css';
import '../public/style.css';

function QriusApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default QriusApp;
