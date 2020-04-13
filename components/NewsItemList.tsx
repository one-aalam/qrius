/* eslint-disable no-console */
import React from 'react';
import useBrowserState from '../lib/hooks/useBrowserState';
import { INewsItem } from '../interfaces/hn';

import NewsItem from './NewsItem';

type Props = {
  items: INewsItem[];
};

interface IBrowserState {
  [key: number]: { points?: number; visible?: boolean };
}

const NewsItemList: React.FC<Props> = ({ items }) => {
  const [cachedItems, cacheItem] = useBrowserState('NewsItemList');

  const cacheNewsItemVisibility = (id) => cacheItem(id, { visible: false });
  const cacheNewsItemPoints = (id, points) => cacheItem(id, { points });

  const getCachedPoints = (item: INewsItem): number => cachedItems[item.objectID] && cachedItems[item.objectID].points;
  const hiddenItems = Object.keys(cachedItems).filter((id) => cachedItems[id] && cachedItems[id].visible === false);
  const visibleItems = items.filter((item) => hiddenItems.indexOf(`${item.objectID}`) === -1);

  return (
    <div className="NewsItemList">
      {visibleItems.map((news, index) => (
        <NewsItem
          key={news.objectID}
          id={news.objectID}
          {...news}
          points={getCachedPoints(news) || news.points}
          source={news.url || ''}
          createdAt={news.created_at}
          commentCount={news.num_comments}
          onHide={cacheNewsItemVisibility}
          onUpvote={cacheNewsItemPoints}
          alt={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default NewsItemList;
