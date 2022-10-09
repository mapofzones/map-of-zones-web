import { CountryFlag, NumberFormat } from 'components';

import { PercentValue } from '../../PercentValue/PercentValue';
import styles from './ModalItem.module.scss';

export function ModalItem({
  item,
}: {
  item: {
    code?: string;
    name: string;
    percent: number;
    value: number;
  };
}): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.progress} style={{ width: `${item.percent}%` }} />

      <div className={styles.content}>
        <div className={styles.titleContainer}>
          {!!item.code && <CountryFlag className={styles.country} country={item.code} />}
          {item.name}
        </div>
        <NumberFormat value={item.value} />
        <PercentValue className={styles.percentValue} value={item.percent} />
      </div>
    </div>
  );
}
