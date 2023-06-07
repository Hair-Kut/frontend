import { useContext } from 'react';

import Frame from 'src/components/Frame';

import { ImageSrcContext } from 'src/contexts/imageSrc';

import styles from './style.module.css';

function ResultImage() {
  const { resultImagePathList, selectedHair } = useContext(ImageSrcContext);
  return (
    <Frame>
      <div className={styles['result-image-wrapper']}>
        <img
          className={selectedHair !== -1 ? styles['result-image'] : styles['result-default-image']}
          src={selectedHair !== -1 ? resultImagePathList[selectedHair] : 'img/result.png'}
        />
      </div>
    </Frame>
  );
}

export default ResultImage;
