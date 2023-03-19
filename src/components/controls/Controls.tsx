import Button from '../button/Button';
import styles from './Controls.module.css';
import Props from './Controls.types';

const Controls = ({ disableDraw, disableReset, onClick }: Props) => (
  <ul className={styles.controls}>
    <li className={styles.controlsItem}>
      <Button
        disabled={!onClick || disableDraw}
        label="Draw card"
        onClick={onClick}
      />
    </li>

    <li className={styles.controlsItem}>
      <Button
        disabled={disableReset}
        label="Reset"
        onClick={() => window.location.reload()}
        variant="secondary"
      />
    </li>
  </ul>
);

export default Controls;
