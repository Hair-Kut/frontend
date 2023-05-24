import styles from './style.module.css';

function Loading() {
  return (
    <div className={styles['loading-wrapper']}>
      <div className={styles.loader} />
      <p className={styles['loading-font']}>추론중입니다.</p>
    </div>
  );
}

export default Loading;
