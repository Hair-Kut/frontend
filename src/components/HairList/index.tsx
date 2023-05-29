import { useContext } from 'react';

import Hair from 'src/components/Hair';

import { ImageSrcContext } from 'src/contexts/imageSrc';

import styles from './style.module.css';

function HairList() {
  const { selectedHair } = useContext(ImageSrcContext);
  const hairList: string[] = Array(11)
    .fill('hair')
    .map((value, index) => value + (index + 1).toString());

  return (
    <div className={styles['hair-list-wrapper']}>
      {hairList.map((hair: string, index: number) => {
        return (
          <Hair key={`${index}+hair`} index={index} hair={hair} selected={index === selectedHair} />
        );
      })}
    </div>
  );
}

export default HairList;
