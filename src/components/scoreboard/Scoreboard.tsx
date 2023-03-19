import styles from './Scoreboard.module.css';
import Props from './Scoreboard.types';

const Scoreboard = ({
  count = 0,
  remaining = 0,
  suitMatches = 0,
  total = 0,
  valueMatches = 0,
}: Props) => (
  <ul className={styles.scoreboard}>
    <li>
      Card {count} of {total} ({remaining} remaining)
    </li>

    <li>Suit matches: {suitMatches}</li>

    <li>Value matches: {valueMatches}</li>

    <li>Total matches: {suitMatches + valueMatches}</li>
  </ul>
);

export default Scoreboard;
