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
  prefix,
  suffix,
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
        className={styles.value}
        numberType={numberType}
        prefix={prefix}
        suffix={suffix}
        value={value}
      />
    </span>
  );
}
