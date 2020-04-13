import Link from 'next/link';
import cx from 'classnames';
import styles from './utility.module.css';

import A from './A';

type Props = {
  numOfPages: number;
  currPage: number;
};

const NewsItemPagination: React.FC<Props> = ({ numOfPages, currPage }) => (
  <div className={cx(styles.px8, styles.py4)}>
    {numOfPages > 1 && numOfPages - 1 !== currPage && (
      <Link href={{ pathname: '/', query: { page: currPage + 1 } }} passHref>
        <A title="Load More">Load More</A>
      </Link>
    )}
  </div>
);

export default NewsItemPagination;
