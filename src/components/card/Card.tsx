import Image from 'next/image';
import styles from './Card.module.css';
import Props from './Card.types';

const Card = ({
  image,
  showError,
  showSnapSuit,
  showSnapValue,
  suit,
  value,
}: Props) => {
  const alt = `A card showing the ${
    value && suit
      ? `${value.toLowerCase()} of ${suit.toLowerCase()}`
      : 'placeholder'
  }`;
  const src = image || '/placeholder.png';

  return (
    <figure className={styles.card}>
      <Image
        alt={alt}
        className={styles.cardImg}
        fill={true}
        priority
        src={src}
        unoptimized
      />

      {showError && (
        <figcaption
          aria-live="polite"
          className={[styles['cardRibbon'], styles[`cardRibbonError`]].join(
            ' '
          )}
        >
          Error!
        </figcaption>
      )}

      {(showSnapSuit || showSnapValue) && (
        <figcaption
          aria-live="polite"
          className={[styles['cardRibbon'], styles['cardRibbonSuccess']].join(
            ' '
          )}
        >
          Snap {showSnapSuit ? 'suit' : 'value'}!
        </figcaption>
      )}
    </figure>
  );
};

export default Card;
