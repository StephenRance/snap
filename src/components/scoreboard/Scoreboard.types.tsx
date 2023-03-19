import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLUListElement> {
  count: number;
  remaining: number;
  suitMatches: number;
  total: number;
  valueMatches: number;
}

export default Props;
