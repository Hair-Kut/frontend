import Hair from 'src/components/Hair';

import styles from './style.module.css';

function HairList() {
  const hairList: string[] = ['hair1', 'hair2', 'hair1', 'hair2', 'hair1', 'hair2'];
  return (
    <div className={styles['hair-list-wrapper']}>
      {hairList.map((hair: string, index: number) => {
        return <Hair key={`${index}+hair`} hair={hair} />;
      })}
    </div>
  );
}

export default HairList;
