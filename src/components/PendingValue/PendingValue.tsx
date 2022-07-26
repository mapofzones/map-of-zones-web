import cn from 'classnames';

import { NumberFormat } from 'components';
import { NumberType } from 'components/ui/NumberFormat/NumberType';
import { PendingIcon } from 'icons';

import styles from './PendingValue.module.scss';
import { PendingValueProps } from './PendingValue.props';

export function PendingValue({
  alignRight = false,
  className,
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
      <NumberFormat className={styles.value} value={value} numberType={numberType} />
    </span>
  );
}
