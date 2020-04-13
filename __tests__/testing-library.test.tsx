import React from 'react';
import { render } from '@testing-library/react';
import * as SITE_CONFIG from '../public/site.config.json';
import Index from '../pages/index';

test('renders site name', () => {
  const { getByText } = render(<Index data={{ hits: [], nbPages: 2, page: 1 }} />);
  const siteName = getByText(SITE_CONFIG.siteName);
  expect(siteName).toBeInTheDocument();
});
