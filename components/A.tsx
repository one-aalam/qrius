import cx from 'classnames';
import styles from './utility.module.css';

type Props = {
  href?: string;
  title: string;
};

const A: React.FC<Props> = ({ children, ...props }) => (
  <a className={cx(styles.tcBlazeOrange, styles.unstyled)} {...props}>
    {children}
  </a>
);

export default A;
