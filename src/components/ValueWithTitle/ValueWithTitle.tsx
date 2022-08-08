import { ValueWithPending } from 'components';
import { NumberType } from 'components/ui/NumberFormat/NumberType';

import styles from './ValueWithTitle.module.scss';

export function ValueWithTitle({
  title,
  alignRight = false,
  numberType = NumberType.Number,
  pendingValue,
  value,
  children,
}: any) {
  return (
    <div>
      <span className={styles.title}>{title}</span>
      <ValueWithPending
        numberType={numberType}
        value={value}
        pendingValue={pendingValue}
        alignRight={alignRight}
      >
        {children}
      </ValueWithPending>
    </div>
  );
}
