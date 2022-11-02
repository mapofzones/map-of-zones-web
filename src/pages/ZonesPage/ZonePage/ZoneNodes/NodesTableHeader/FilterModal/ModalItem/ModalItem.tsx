import { CountryFlag, NumberFormat } from 'components';

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
      {!!item.code && <CountryFlag className={styles.country} country={item.code} />}
      {item.name}
      <NumberFormat className={styles.value} value={item.value} />
    </div>
  );
}
