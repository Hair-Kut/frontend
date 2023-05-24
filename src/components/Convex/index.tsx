import { PropsWithChildren } from 'react';

import styles from './style.module.css';

interface Props extends PropsWithChildren {
  condition?: boolean;
}

function Convex({ children, condition = true }: Props) {
  return <div className={`${condition && styles['convex-wrapper']}`}>{children}</div>;
}

export default Convex;
