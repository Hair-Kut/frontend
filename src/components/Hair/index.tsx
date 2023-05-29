import { useContext } from 'react';

import Frame from 'src/components/Frame';
import Convex from 'src/components/Convex';

import { ImageSrcContext } from 'src/contexts/imageSrc';

import style from './style.module.css';

interface Props {
  index: number;
  hair: string;
  selected?: boolean;
}

function Hair({ index, hair, selected = false }: Props) {
  const { userImageSrc, setSelectedHair } = useContext(ImageSrcContext);
  const condition = !!userImageSrc;

  const handleClickHair = () => {
    if (!condition) {
      return;
    }
    setSelectedHair(index);
  };

  return (
    <Frame>
      <Convex condition={condition && !selected}>
        <div
          className={`${style['hair-wrapper']} ${condition && style['can-click']} ${
            selected && style['hair-selected']
          }`}
          onClick={handleClickHair}>
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
