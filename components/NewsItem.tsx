import React from 'react';
import cx from 'classnames';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import styles from './utility.module.css';
import mstyle from './NewsItem.module.css';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

type Props = {
  //
  id: number;
  title: string;
  points: number;
  commentCount: number;
  source: string;
  author: string; // username of the poster
  createdAt: string; // timestamp

  onUpvote: (id: number, points: number) => void;
  onHide: (id: number) => void;

  visible?: boolean;
  alt?: boolean;
};

const NewsItem: React.FC<Props> = ({
  commentCount,
  points: pointsProp,
  title = '',
  source = '',
  author = '',
  createdAt,
  id,
  onHide = () => {},
  onUpvote = () => {},
  visible: visibleProp = true,
  alt = false,
}) => {
  const [visible, setVisibility] = React.useState(true);
  const [points, setPoints] = React.useState(0);

  React.useEffect(() => {
    setPoints(pointsProp);
    setVisibility(visibleProp);
    return () => {};
  }, [visibleProp, pointsProp]);

  const handleVisibility = () => {
    setVisibility(!visible);
    onHide(id);
  };

  const handleUpvote = () => {
    setPoints((prevPoints) => prevPoints + 1);
    onUpvote(id, points + 1);
  };

  return (
    visible && (
      <div className={cx(mstyle.NewsItem, styles.flexR, alt ? styles.bgCararra : styles.bgSpringWood)}>
        <div className={styles.flex}>
          {/* NewsItem: Comments Count */}
          <div className={mstyle.NewsItem__NumCol}>{commentCount > 0 ? commentCount : '-'}</div>
          {/* NewsItem: Points & Upvote button */}
          <div className={mstyle.NewsItem__NumCol}>
            <NewsItemPoint points={points} />
            <button
              className={cx(styles.unstyled, styles.fs12, styles.tcDustyGray)}
              type="button"
              onClick={handleUpvote}
            >
              &#x25B2;
            </button>
          </div>
          {/* NewsItem: Title */}
          <div className="NewsItem__title">{title}</div>&nbsp;
        </div>

        <div className={cx(styles.flex, styles.fw600, styles.fs14)}>
          {/* NewsItem: Source */}
          <div className="NewsItem__source">
            <span className={styles.tcSilverLight}>&#40;</span>
            <span className={styles.tcGray}>
              {source.indexOf('://') !== -1 ? source.split('://')[1].split('/')[0] : source}
            </span>
            <span className={styles.tcSilverLight}>&#41;</span>
          </div>

          {/* NewsItem: Author */}
          <div className={styles.NewsItem__author}>
            &nbsp;<span className={styles.tcSilverDark}>by</span>&nbsp;{author}&nbsp;
          </div>

          {/* NewsItem: CreatedAt */}
          <div className={styles.tcGray}>{timeAgo.format(new Date(createdAt))}</div>

          {/* NewsItem: Hide Button */}
          <button className={cx(styles.unstyled)} type="button" onClick={handleVisibility}>
            <span className={styles.tcStack}>
              &#91;<span className={cx(styles.px4, styles.tcBlack)}>hide</span>&#93;
            </span>
          </button>
        </div>
      </div>
    )
  );
};

const NewsItemPoint = ({ points }) => (
  <span
    className={cx(
      points >= 100 && styles.tcBlazeOrange,
      points < 100 && points >= 80 && styles.tcFire,
      points < 80 && styles.white
    )}
  >
    {points}
  </span>
);

export default NewsItem;
