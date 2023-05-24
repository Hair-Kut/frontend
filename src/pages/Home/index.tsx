import { useState } from 'react';

import ImageUploader from 'src/components/ImageUploader';
import HairList from 'src/components/HairList';
import ResultImage from 'src/components/ResultImage';
import Logo from 'src/components/Logo/index';
import Button from 'src/components/Button';

import { ImageSrcContext } from 'src/contexts/imageSrc';

import styles from './style.module.css';

function HomePage() {
  const [userImageSrc, setUserImageSrc] = useState('');
  const [hairImageSrc, setHairImageSrc] = useState('');
  const [resultImageSrc, setResultImageSrc] = useState('');
  const handleClick = () => {};

  return (
    <ImageSrcContext.Provider
      value={{
        userImageSrc,
        setUserImageSrc,
        hairImageSrc,
        setHairImageSrc,
        resultImageSrc,
        setResultImageSrc,
      }}>
      <div className={styles['home-wrapper']}>
        <Logo />
        <div className={styles['home-section']}>
          <ImageUploader />
          <Button condition={!!userImageSrc} onClick={handleClick}>
            전송하기
          </Button>
          <ResultImage imageSrc='' />
        </div>
        <HairList />
      </div>
    </ImageSrcContext.Provider>
  );
}

export default HomePage;
