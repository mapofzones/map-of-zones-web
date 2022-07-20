import cn from 'classnames';

import { NumberFormat } from 'components';
import { NumberType } from 'components/ui/NumberFormat/NumberType';
import { PendingIcon } from 'icons';

import styles from './ValueWithPending.module.scss';
import { ValueWithPendingProps } from './ValueWithPending.props';

export function ValueWithPending({
  value,
  pendingValue,
  numberType = NumberType.Number,
  alignRight = false,
  className,
  ...props
}: ValueWithPendingProps) {
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
