import { ChangeEvent, useContext } from 'react';

import Frame from 'src/components/Frame';
import Convex from 'src/components/Convex';

import { ImageSrcContext } from 'src/contexts/imageSrc';

import styles from './style.module.css';

interface Props {
  onUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}
function ImageUploader({ onUpload }: Props) {
  const { userImageSrc: imageSrc, isImageUploaded } = useContext(ImageSrcContext);

  return (
    <Frame>
      <Convex>
        <div className={styles['image-uploader-wrapper']}>
          <input
            className={styles['image-uploader-input']}
            type='file'
            accept='image/*'
            onChange={onUpload}
            name='image'
            id='image'
            aria-label='image'
          />
          <label htmlFor='image'>
            {isImageUploaded ? (
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
          {isImageUploaded ? (
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
