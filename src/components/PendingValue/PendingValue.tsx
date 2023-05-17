import cn from 'classnames';

import { PendingIcon } from 'assets/icons';
import { NumberType } from 'types/NumberType';
import { NumberFormat } from 'ui';

import styles from './PendingValue.module.scss';
import { PendingValueProps } from './PendingValue.props';

export function PendingValue({
  alignRight = false,
  className,
  compact = false,
  numberType = NumberType.Number,
  value,
  ...props
}: PendingValueProps) {
  return (
    <span
      className={cn(
        styles.container,
        {
          [styles.rightAlign]: alignRight,
        },
        className
      )}
      {...props}
    >
      <PendingIcon />
      <NumberFormat
        compact={compact}
        className={styles.value}
        numberType={numberType}
        value={value}
      />
    </span>
  );
}
