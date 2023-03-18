import { HTMLProps, ReactNode } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

export default Props;
