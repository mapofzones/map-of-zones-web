import cn from 'classnames';

import { NumberFormat, PendingValue } from 'components';
import { NumberType } from 'components/ui/NumberFormat/NumberType';

import styles from './ValueWithPending.module.scss';
import { ValueWithPendingProps } from './ValueWithPending.props';

export function ValueWithPending({
  alignRight = false,
  className,
  numberType = NumberType.Number,
  pendingValue,
  value,
  ...props
}: ValueWithPendingProps) {
  return (
    <span
      className={cn(className, styles.container, {
        [styles.rightAlign]: alignRight,
      })}
      {...props}
    >
      <NumberFormat value={value} numberType={numberType} />
      {pendingValue != null && (
        <PendingValue
          className={styles.pendingContainer}
          numberType={numberType}
          value={pendingValue}
        />
      )}
    </span>
  );
}
