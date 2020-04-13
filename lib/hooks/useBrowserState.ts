import React from 'react';
import * as SITE_CONFIG from '../../public/site.config.json';

type StateProp = {
  [key: string]: any;
};

const useBrowserState = (
  name: string,
  state: StateProp = {}
): [StateProp, (id: string, payload: StateProp) => void] => {
  const [cachedItemsState, setCachedItemsState] = React.useState<StateProp>(state);
  const APP_STORE_KEY = `${SITE_CONFIG.siteName}__${name}`;
  const updateCachedItemsState = (id, payload) => {
    const updatedItemState = {
      [id]: { ...((cachedItemsState[id] as unknown) as object), ...payload },
    };
    const updateState = { ...cachedItemsState, ...updatedItemState };
    localStorage.setItem(APP_STORE_KEY, JSON.stringify(updateState));
    setCachedItemsState(updateState);
  };
  React.useEffect(() => {
    const cachedItems = JSON.parse(window.localStorage.getItem(APP_STORE_KEY) || JSON.stringify(state));
    setCachedItemsState(cachedItems);
  }, []);

  return [cachedItemsState, updateCachedItemsState];
};

export default useBrowserState;
