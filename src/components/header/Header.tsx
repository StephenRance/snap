import Container from '../container/Container';
import styles from './Header.module.css';
import Props from './Header.types';

const Header = ({ heading }: Props) => {
  if (heading) {
    return (
      <header className={styles.header}>
        <Container>
          <h1 className={styles.headerCopy}>{heading}</h1>
        </Container>
      </header>
    );
  }

  return null;
};

export default Header;
