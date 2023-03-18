import styles from './Row.module.css';
import Props from './Row.types';

const Row = ({ children }: Props) => {
  if (children) {
    return <section className={styles.row}>{children}</section>;
  }

  return null;
};

export default Row;
