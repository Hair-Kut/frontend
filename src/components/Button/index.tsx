import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import styles from './style.module.css';

type ExtendProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;
interface Props extends ExtendProps {
  condition?: boolean;
}

function Button({ condition = true, children, ...args }: Props) {
  return (
    <>
      {condition ? (
        <button className={styles.button} {...args}>
          {children}
        </button>
      ) : (
        <button className={`${styles.button} ${styles['button-disabled']}`} {...args} disabled>
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
export type { Props };
