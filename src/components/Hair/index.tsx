import style from './style.module.css';

interface Props {
  hair: string;
}

function Hair({ hair }: Props) {
  return (
    <div className={style['hair-wrapper']}>
      <img className={style['hair-img']} src={`img/${hair}.svg`} alt={`${hair}이미지`} />
    </div>
  );
}

export default Hair;
export type { Props };
