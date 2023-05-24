import { useContext, useEffect } from 'react';

import Frame from 'src/components/Frame';
import Convex from 'src/components/Convex';

import imageUpload from 'src/hooks/imageUpload';

import { ImageSrcContext } from 'src/contexts/imageSrc';

import styles from './style.module.css';

function ImageUploader() {
  const { setUserImageSrc } = useContext(ImageSrcContext);
  const [imageSrc, handleUpload] = imageUpload();

  useEffect(() => {
    setUserImageSrc(imageSrc);
  }, [imageSrc]);

  return (
    <Frame>
      <Convex>
        <div className={styles['image-uploader-wrapper']}>
          <input
            className={styles['image-uploader-input']}
            type='file'
            accept='image/*'
            onChange={handleUpload}
            name='image'
            id='image'
            aria-label='image'
          />
          <label htmlFor='image'>
            {!!imageSrc ? (
              <img
                className={styles['image-uploader-image']}
                src={imageSrc}
                alt='업로드된 이미지'
              />
            ) : (
              <img
                className={styles['image-uploader-image']}
                src='img/image.png'
                alt='이미지 업로더'
              />
            )}
          </label>
          {!!imageSrc ? (
            <p className={styles['image-uploader-help']}>
              이미지 클릭 시 파일을 다시 업로드할 수 있습니다.
            </p>
          ) : (
            <p className={styles['image-uploader-help']}>파일을 업로드하세요.</p>
          )}
        </div>
      </Convex>
    </Frame>
  );
}

export default ImageUploader;
