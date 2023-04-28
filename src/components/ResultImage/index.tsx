import styles from './style.module.css';

interface Props {
  isLoaded: boolean;
  imageSrc: string;
}

function ResultImage({ isLoaded, imageSrc }: Props) {
  return (
    <div className={styles['result-image-wrapper']}>
      {isLoaded ? (
        <img className={styles['result-image']} src={imageSrc} />
      ) : (
        <div className={styles.loading}>
          <div />
          <div />
          <div />
          <div />
        </div>
      )}
    </div>
  );
}

export default ResultImage;
export type { Props };
