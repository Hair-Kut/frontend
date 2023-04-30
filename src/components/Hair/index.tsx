import Frame from 'src/components/Frame';
import Convex from 'src/components/Convex';

import style from './style.module.css';

interface Props {
  hair: string;
  expanded?: boolean;
  onClickHair?: () => void;
}

function Hair({ hair, expanded = false, onClickHair = () => {} }: Props) {
  return (
    <>
      {expanded ? (
        <div className={`${style['hair-wrapper']} ${style['expanded']}`}>
          <img className={style['hair-img']} src={`img/${hair}.svg`} alt={`${hair}이미지`} />
        </div>
      ) : (
        <Frame>
          <Convex>
            <div className={`${style['hair-wrapper']} ${style['in-list']}`} onClick={onClickHair}>
              <img
                className={style['hair-img']}
                src={`img/${hair}.svg`}
                alt={`${hair}이미지`}
                aria-label={hair}
              />
            </div>
          </Convex>
        </Frame>
      )}
    </>
  );
}

export default Hair;
export type { Props };
