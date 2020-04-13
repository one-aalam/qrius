import React from 'react';
import { INewsItem } from '../interfaces/hn';
import BrowserStateNewsContext from '../lib/contexts/BrowserStateNewsContext';

import NewsItem from './NewsItem';

type Props = {
  items: INewsItem[];
  cacheUpvotes?: boolean;
  cacheHidden?: boolean;
  showCachedHidden?: boolean;
  showCachedPoints?: boolean;
};

interface IBrowserState {
  [key: number]: { points?: number; visible?: boolean };
}

const NewsItemList: React.FC<Props> = ({
  items,
  cacheUpvotes = false,
  cacheHidden = false,
  showCachedHidden = true,
  showCachedPoints = false,
}) => {
  const { cache, get, items: cachedItems } = React.useContext(BrowserStateNewsContext);
  const hidden = Object.keys(cachedItems).filter((id) => get(id, 'visible') === false);

  return (
    <div className="NewsItemList">
      {(showCachedHidden ? items : items.filter((item) => hidden.indexOf(`${item.objectID}`) === -1)).map(
        (news, index) => (
          <NewsItem
            key={news.objectID}
            id={news.objectID}
            {...news}
            points={(showCachedPoints && get(news.objectID, 'points')) || news.points}
            source={news.url || ''}
            createdAt={news.created_at}
            commentCount={news.num_comments}
            onHide={(id) => cacheHidden && cache(id, { visible: false })}
            onUpvote={(id, points) => cacheUpvotes && cache(id, { points })}
            alt={index % 2 !== 0}
          />
        )
      )}
    </div>
  );
};

export default NewsItemList;
