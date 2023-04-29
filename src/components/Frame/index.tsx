import { PropsWithChildren } from 'react';

import styles from './style.module.css';

function Frame({ children }: PropsWithChildren) {
  return <div className={styles['frame-wrapper']}>{children}</div>;
}

export default Frame;
