import cn from 'classnames';

import { NumberFormat } from 'components';
import { NumberType } from 'components/NumberFormat/NumberType';
import { PendingIcon } from 'icons';

import styles from './ValueWithPending.module.scss';

export function ValueWithPending({
  value,
  pendingValue,
  numberType = NumberType.Number,
  alignRight = false,
  className,
  ...props
}: any) {
  return (
    <span
      className={cn(className, styles.container, {
        [styles.rightAlign]: alignRight,
      })}
      {...props}
    >
      <NumberFormat className={styles.value} value={value} numberType={numberType} />
      {pendingValue != null && (
        <span className={styles.pendingContainer}>
          <PendingIcon />
          <NumberFormat
            className={styles.pendingValue}
            value={pendingValue}
            numberType={numberType}
          />
        </span>
      )}
    </span>
  );
}
