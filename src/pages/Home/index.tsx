import { useMemo, useState } from 'react';

import ImageUploader from 'src/components/ImageUploader';
import HairList from 'src/components/HairList';
import SelectedHair from 'src/components/SelectedHair';
import Logo from 'src/components/Logo/index';
import Button from 'src/components/Button';

import { UserImageSrcContext, HairImageSrcContext } from 'src/contexts/image';

import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [userImageSrc, setUserImageSrc] = useState('');
  const [hairImageSrc, setHairImageSrc] = useState('');
  const navigate = useNavigate();

  const condition = useMemo(() => !!userImageSrc && !!hairImageSrc, [userImageSrc, hairImageSrc]);

  const handleClick = () => {
    navigate('/result');
  };

  return (
    <div className={styles['home-wrapper']}>
      <Logo />
      <div className={styles['home-section']}>
        <UserImageSrcContext.Provider value={{ userImageSrc, setUserImageSrc }}>
          <ImageUploader />
        </UserImageSrcContext.Provider>
        <HairImageSrcContext.Provider value={{ hairImageSrc, setHairImageSrc }}>
          <SelectedHair />
        </HairImageSrcContext.Provider>
      </div>
      <HairImageSrcContext.Provider value={{ hairImageSrc, setHairImageSrc }}>
        <HairList />
      </HairImageSrcContext.Provider>
      <Button condition={condition} onClick={handleClick}>
        전송하기
      </Button>
    </div>
  );
}

export default HomePage;
