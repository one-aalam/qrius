import React from 'react';
import * as SITE_CONFIG from '../public/site.config.json';

import Layout from '../components/layout';

export default () => (
  <Layout>
      <h1 className="title">{SITE_CONFIG.siteName}</h1>
      <p className="description">
        {SITE_CONFIG.seo.description}
      </p>
  </Layout>
);
