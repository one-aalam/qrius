import React from 'react';
import { render } from '@testing-library/react';
import * as SITE_CONFIG from '../public/site.config.json';
import Index from '../pages/index';

test('renders description text', () => {
  const { getByText } = render(<Index />);
  const linkElement = getByText(SITE_CONFIG.seo.description);
  expect(linkElement).toBeInTheDocument();
});
