import { PropsWithChildren } from 'react';

import styles from './style.module.css';

function Convex({ children }: PropsWithChildren) {
  return <div className={styles['convex-wrapper']}>{children}</div>;
}

export default Convex;
