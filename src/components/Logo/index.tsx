import styles from './style.module.css';

function Logo() {
  return (
    <div className={styles['logo-wrapper']}>
      <img className={styles['logo']} src='img/Hair-Kut.svg' alt='헤어컷 로고' />
      <img className={styles['ku']} src='img/logo.png' alt='쿠 이미지' />
    </div>
  );
}

export default Logo;
