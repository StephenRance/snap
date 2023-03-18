import styles from './Button.module.css';
import Props from './Button.types';

const Button = ({ label, variant = 'primary', ...props }: Props) => {
  if (label) {
    return (
      <button
        {...props}
        className={[
          styles['btn'],
          styles[`btn--${variant}`],
          props?.className,
        ].join(' ')}
      >
        <span>{label}</span>
      </button>
    );
  }

  return null;
};

export default Button;
