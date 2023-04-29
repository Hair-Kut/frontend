import Hair from 'src/components/Hair';
import Frame from 'src/components/Frame';

import styles from './style.module.css';

interface Props {
  hairImageSrc: string;
}

function SelectedHair({ hairImageSrc }: Props) {
  return (
    <Frame>
      {!!hairImageSrc ? (
        <Hair hair={hairImageSrc} selected />
      ) : (
        <div className={styles['not-selected-hair-wrapper']}>
          <img
            className={styles['not-selected-hair-image']}
            src='img/Selected-Hair.svg'
            alt='헤어스타일 선택 이미지'
          />
          <p className={styles['not-selected-hair-help']}>헤어스타일을 선택해주세요.</p>
        </div>
      )}
    </Frame>
  );
}

export default SelectedHair;
export type { Props };
