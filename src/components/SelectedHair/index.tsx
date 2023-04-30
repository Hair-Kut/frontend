import { useContext } from 'react';

import Hair from 'src/components/Hair';
import Frame from 'src/components/Frame';

import { HairImageSrcContext } from 'src/contexts/image';

import styles from './style.module.css';

function SelectedHair() {
  const { hairImageSrc } = useContext(HairImageSrcContext);

  return (
    <Frame>
      <div className={styles['not-selected-hair-wrapper']}>
        {!!hairImageSrc ? (
          <Hair hair={hairImageSrc} expanded />
        ) : (
          <img
            className={styles['not-selected-hair-image']}
            src='img/Selected-Hair.svg'
            alt='헤어스타일 선택 이미지'
          />
        )}
        {!!hairImageSrc ? (
          <p className={styles['not-selected-hair-help']}>다른 헤어스타일도 선택할 수 있습니다.</p>
        ) : (
          <p className={styles['not-selected-hair-help']}>헤어스타일을 선택해주세요.</p>
        )}
      </div>
    </Frame>
  );
}

export default SelectedHair;