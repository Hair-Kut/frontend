import { useContext } from 'react';

import Frame from 'src/components/Frame';
import Convex from 'src/components/Convex';

import { ImageSrcContext } from 'src/contexts/imageSrc';

import style from './style.module.css';

interface Props {
  hair: string;
  onClickHair?: () => void;
}

function Hair({ hair, onClickHair = () => {} }: Props) {
  const { userImageSrc } = useContext(ImageSrcContext);
  const condition = !!userImageSrc;

  return (
    <Frame>
      <Convex condition={condition}>
        <div
          className={`${style['hair-wrapper']} ${condition && style['can-click']}`}
          onClick={onClickHair}>
          <img
            className={style['hair-img']}
            src={`img/${hair}.svg`}
            alt={`${hair}이미지`}
            aria-label={hair}
          />
        </div>
      </Convex>
    </Frame>
  );
}

export default Hair;
export type { Props };
