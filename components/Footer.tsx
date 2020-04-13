import cx from 'classnames';
import styles from './utility.module.css';

type Props = {};

const Footer: React.FC<Props> = ({ children }) => <footer className={cx(styles.px8, styles.py4)}>{children}</footer>;

export default Footer;
