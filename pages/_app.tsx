import { AppProps } from 'next/app'

import '../public/reset.css';
import '../public/style.css';

function QriusApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default QriusApp
