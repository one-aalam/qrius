import Link from 'next/link';
import cx from 'classnames';
import styles from './utility.module.css';

type Props = {
  siteName: string;
};

const Header: React.FC<Props> = ({ siteName, children }) => (
  <header className={cx(styles.flexR, styles.bgBlazeOrange, styles.px8, styles.py4)}>
    <Link href={{ pathname: '/' }} passHref>
      <a
        title={siteName}
        href="/"
        style={{
          display: 'inline-block',
          textDecoration: 'none',
          color: 'white',
          paddingLeft: 6,
          paddingRight: 6,
          border: 4,
          borderColor: '#ffffff',
          borderStyle: 'solid',
        }}
      >
        {siteName}
      </a>
    </Link>
    {children}
  </header>
);

export default Header;
