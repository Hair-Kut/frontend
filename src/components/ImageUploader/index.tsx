import imageUpload from 'src/hooks/imageUpload';

import styles from './style.module.css';

function ImageUploader() {
  const [imageSrc, handleUpload] = imageUpload();

  return (
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
            <img className={styles['image-uploader-image']} src={imageSrc} alt='업로드된 이미지' />
          ) : (
            <>
              <img
                className={styles['image-uploader-image']}
                src='img/image.png'
                alt='이미지 업로더'
              />
              <p>click to file upload</p>
            </>
          )}
        </div>
      </label>
    </div>
  );
}

export default ImageUploader;
