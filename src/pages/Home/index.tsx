import { useEffect, useState } from 'react';

import ImageUploader from 'src/components/ImageUploader';
import HairList from 'src/components/HairList';
import ResultImage from 'src/components/ResultImage';
import Logo from 'src/components/Logo/index';
import Button from 'src/components/Button';
import Loading from 'src/components/Loading';

import { ImageSrcContext } from 'src/contexts/imageSrc';

import useImageUpload from 'src/hooks/useImageUpload';
import useInferenceCheck from 'src/hooks/useInferenceCheck';

import { getResultImagePath, postStartInference } from 'src/api';

import styles from './style.module.css';

function HomePage() {
  const [selectedHair, setSelectedHair] = useState(-1);
  const [start, setStart] = useState(false);
  const [resultImagePathList, setResultImagePathList] = useState<string[]>([]);
  const { id, imageSrc: userImageSrc, isImageUploaded, handleUpload } = useImageUpload();
  const isInferenceFinished = useInferenceCheck(start, id);

  const handleClick = async () => {
    await postStartInference(id);
    setStart(true);
  };

  const getResultImage = async () => {
    setResultImagePathList(await getResultImagePath(id));
  };
  useEffect(() => {
    if (isInferenceFinished) {
      getResultImage();
    }
  }, [isInferenceFinished]);

  return (
    <ImageSrcContext.Provider
      value={{
        userImageSrc,
        resultImagePathList,
        isImageUploaded,
        selectedHair,
        setSelectedHair,
      }}>
      {start && !isInferenceFinished && <Loading />}
      <div className={styles['home-wrapper']}>
        <Logo />
        <div className={styles['home-section']}>
          <ImageUploader onUpload={handleUpload} />
          <Button condition={isImageUploaded} onClick={handleClick}>
            전송하기
          </Button>
          <ResultImage />
        </div>
        <HairList />
      </div>
    </ImageSrcContext.Provider>
  );
}

export default HomePage;
