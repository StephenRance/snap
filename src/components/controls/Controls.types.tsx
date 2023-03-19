import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLUListElement> {
  disableDraw?: boolean;
  disableReset?: boolean;
  onClick?: () => void;
}

export default Props;
