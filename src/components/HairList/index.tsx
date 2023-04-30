import { useContext } from 'react';

import Hair from 'src/components/Hair';

import { HairImageSrcContext } from 'src/contexts/image';

import styles from './style.module.css';

function HairList() {
  const { setHairImageSrc } = useContext(HairImageSrcContext);
  const hairList: string[] = Array(11)
    .fill('hair')
    .map((value, index) => value + (index + 1).toString());

  const handleClickHair = (hair: string) => {
    setHairImageSrc(hair);
  };

  return (
    <div className={styles['hair-list-wrapper']}>
      {hairList.map((hair: string, index: number) => {
        return <Hair key={`${index}+hair`} hair={hair} onClickHair={() => handleClickHair(hair)} />;
      })}
    </div>
  );
}

export default HairList;
