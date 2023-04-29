import ImageUploader from 'src/components/ImageUploader';
import HairList from 'src/components/HairList';
import SelectedHair from 'src/components/SelectedHair';
import Logo from 'src/components/Logo/index';

import styles from './style.module.css';

function HomePage() {
  return (
    <div className={styles['home-wrapper']}>
      <Logo />
      <div className={styles['home-section']}>
        <ImageUploader />
        <SelectedHair hairImageSrc='' />
      </div>
      <HairList />
    </div>
  );
}

export default HomePage;
