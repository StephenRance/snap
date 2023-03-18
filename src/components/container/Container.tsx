import styles from './Container.module.css';
import Props from './Container.types';

const Container = ({ children }: Props) => {
  if (children) {
    return <div className={styles.container}>{children}</div>;
  }

  return null;
};

export default Container;
