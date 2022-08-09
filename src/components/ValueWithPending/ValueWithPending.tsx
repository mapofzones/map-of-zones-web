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
  prefix,
  suffix,
  value,
  children,
  ...props
}: ValueWithPendingProps) {
  return (
    <span
      className={cn(className, styles.container, {
        [styles.rightAlign]: alignRight,
      })}
      {...props}
    >
      {children}
      {value && (
        <NumberFormat numberType={numberType} prefix={prefix} suffix={suffix} value={value} />
      )}
      {pendingValue != null && (
        <PendingValue
          className={styles.pendingContainer}
          numberType={numberType}
          prefix={prefix}
          suffix={suffix}
          value={pendingValue}
        />
      )}
    </span>
  );
}
