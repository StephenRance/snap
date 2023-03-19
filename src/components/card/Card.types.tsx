import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  image?: string;
  showError: boolean;
  showSnapSuit: boolean;
  showSnapValue: boolean;
  suit?: string;
  value?: string;
}

export default Props;
