import React from 'react';
import useBrowserState from '../hooks/useBrowserState';

const BrowserStateContext = React.createContext(null);

export const Provider: React.FC = ({ children }) => {
  const [cachedItems, cacheItem] = useBrowserState(`GLOBAL`);
  const cache = (id, payload) => cacheItem(id, payload);
  // eslint-disable-next-line no-nested-ternary
  const get = (id, key) => (cachedItems[id] && key ? cachedItems[id][key] : cachedItems[id]);

  return (
    <BrowserStateContext.Provider
      value={{
        items: cachedItems,
        cache,
        get,
      }}
    >
      {children}
    </BrowserStateContext.Provider>
  );
};

export default {
  Provider,
  Consumer: BrowserStateContext.Consumer,
};
