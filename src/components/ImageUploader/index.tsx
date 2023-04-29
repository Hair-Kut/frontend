import imageUpload from 'src/hooks/imageUpload';
import Frame from 'src/components/Frame';

import styles from './style.module.css';

function ImageUploader() {
  const [imageSrc, handleUpload] = imageUpload();

  return (
    <Frame>
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
          <div className={styles['convex-wrapper']}>
            {!!imageSrc ? (
              <>
                <img
                  className={styles['image-uploader-image']}
                  src={imageSrc}
                  alt='업로드된 이미지'
                />
                <p className={styles['image-uploader-help']}>
                  이미지 클릭 시 파일을 다시 업로드할 수 있습니다.
                </p>
              </>
            ) : (
              <>
                <img
                  className={styles['image-uploader-image']}
                  src='img/image.png'
                  alt='이미지 업로더'
                />
                <p className={styles['image-uploader-help']}>파일을 업로드하세요.</p>
              </>
            )}
          </div>
        </label>
      </div>
    </Frame>
  );
}

export default ImageUploader;
