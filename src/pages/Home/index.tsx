import { useRef, useState } from 'react';
import axios from 'axios';

import ImageUploader from 'src/components/ImageUploader';
import HairList from 'src/components/HairList';
import ResultImage from 'src/components/ResultImage';
import Logo from 'src/components/Logo/index';
import Button from 'src/components/Button';

import { ImageSrcContext } from 'src/contexts/imageSrc';

import usePresignedURL from 'src/hooks/usePresignedUrl';
import useImageUpload from 'src/hooks/useImageUpload';

import { SERVER_URL } from 'src/constants';

import styles from './style.module.css';

function HomePage() {
  const [resultImageSrc, setResultImageSrc] = useState('');
  const [selectedHair, setSelectedHair] = useState(-1);
  const { id, presignedUrl } = usePresignedURL();
  const {
    imageSrc: userImageSrc,
    isImageUploaded,
    handleUpload,
  } = useImageUpload(id, presignedUrl);

  const handleClick = async () => {
    await axios.post(SERVER_URL + `/api/memberImages/upload_complete?id=${id}`);
  };

  return (
    <ImageSrcContext.Provider
      value={{
        userImageSrc,
        resultImageSrc,
        setResultImageSrc,
        isImageUploaded,
        selectedHair,
        setSelectedHair,
      }}>
      <div className={styles['home-wrapper']}>
        <Logo />
        <div className={styles['home-section']}>
          <ImageUploader onUpload={handleUpload} />
          <Button condition={isImageUploaded} onClick={handleClick}>
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
