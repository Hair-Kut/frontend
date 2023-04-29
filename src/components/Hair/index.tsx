import Frame from 'src/components/Frame';
import style from './style.module.css';

interface Props {
  hair: string;
  selected?: boolean;
}

function Hair({ hair, selected }: Props) {
  return (
    <Frame>
      {selected ? (
        <div className={`${style['hair-wrapper']} ${style['selected']}`}>
          <img className={style['hair-img']} src={`img/${hair}.svg`} alt={`${hair}이미지`} />
        </div>
      ) : (
        <div className={`${style['hair-wrapper']} ${style['in-list']}`}>
          <img className={style['hair-img']} src={`img/${hair}.svg`} alt={`${hair}이미지`} />
        </div>
      )}
    </Frame>
  );
}

Hair.propTypes = {
  selected: false,
};

export default Hair;
export type { Props };
