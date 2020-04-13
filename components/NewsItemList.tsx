/* eslint-disable no-console */
import { INewsItem } from '../interfaces/hn';

import NewsItem from './NewsItem';

type Props = {
  items: INewsItem[];
};

const NewsItemList: React.FC<Props> = ({ items }) => (
  <div className="NewsItemList">
    {items.map((news, index) => (
      <NewsItem
        key={news.objectID}
        id={news.objectID}
        source={news.url || ''}
        createdAt={news.created_at}
        commentCount={news.num_comments}
        {...news}
        onHide={(id) => console.log(id)}
        onUpvote={(id, points) => console.log(id, points)}
        visible
        alt={index % 2 !== 0}
      />
    ))}
  </div>
);

export default NewsItemList;
