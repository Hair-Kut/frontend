import Frame from 'src/components/Frame';

import styles from './style.module.css';

interface Props {
  imageSrc: string;
}

function ResultImage({ imageSrc }: Props) {
  return (
    <Frame>
      <div className={styles['result-image-wrapper']}>
        <img className={styles['result-image']} src={!!imageSrc ? imageSrc : 'img/result.png'} />
      </div>
    </Frame>
  );
}

export default ResultImage;
export type { Props };
