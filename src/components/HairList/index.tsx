import Hair from 'src/components/Hair';

import styles from './style.module.css';

function HairList() {
  const hairList: string[] = Array(11)
    .fill('hair')
    .map((value, index) => value + (index + 1).toString());
  return (
    <div className={styles['hair-list-wrapper']}>
      {hairList.map((hair: string, index: number) => {
        return <Hair key={`${index}+hair`} hair={hair} />;
      })}
    </div>
  );
}

export default HairList;
