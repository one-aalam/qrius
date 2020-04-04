import Head from 'next/head';
import * as SITE_CONFIG from '../public/site.config.json';

export default ({ children, title = SITE_CONFIG.seo.title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
)