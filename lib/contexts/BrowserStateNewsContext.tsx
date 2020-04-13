import React from 'react';
import useBrowserState from '../hooks/useBrowserState';

const BrowserStateNewsContext = React.createContext(null);

export const BrowserStateNewsContextProvider: React.FC = ({ children }) => {
  const [cachedItems, cacheItem] = useBrowserState(`NEWS_CONTEXT`);
  const cache = (id, payload) => cacheItem(id, payload);
  // eslint-disable-next-line no-nested-ternary
  const get = (id, key) => (cachedItems[id] && key ? cachedItems[id][key] : cachedItems[id]);

  return (
    <BrowserStateNewsContext.Provider
      value={{
        items: cachedItems,
        cache,
        get,
      }}
    >
      {children}
    </BrowserStateNewsContext.Provider>
  );
};

export default BrowserStateNewsContext;
