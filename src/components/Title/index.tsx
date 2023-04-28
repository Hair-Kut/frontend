import styles from './style.module.css';

interface Props {
  title: string;
}

function Title({ title }: Props) {
  return <p className={styles.title}>{title}</p>;
}

export default Title;
export type { Props };
