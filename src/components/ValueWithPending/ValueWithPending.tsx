import cn from 'classnames';

import { NumberFormat, PendingValue } from 'components';
import { NumberType } from 'components/ui/NumberFormat/NumberType';
import { ElementSize } from 'types/ElementSize';

import styles from './ValueWithPending.module.scss';
import { ValueWithPendingProps } from './ValueWithPending.props';

export function ValueWithPending({
  alignRight = false,
  children,
  className,
  compact = false,
  numberType = NumberType.Number,
  pendingValue,
  prefix,
  size = ElementSize.MEDIUM,
  suffix,
  title,
  value,
  ...props
}: ValueWithPendingProps) {
  return (
    <div
      className={cn(className, styles.container, {
        [styles.sm]: size === ElementSize.SMALL,
        [styles.md]: size === ElementSize.MEDIUM,
        [styles.lg]: size === ElementSize.LARGE,
      })}
      {...props}
    >
      {title && <span className={styles.title}>{title}</span>}
      <span
        className={cn(styles.valueContainer, {
          [styles.rightAlign]: alignRight,
        })}
      >
        {children}
        {value && (
          <NumberFormat
            compact={compact}
            numberType={numberType}
            prefix={prefix}
            suffix={suffix}
            value={value}
          />
        )}
        {pendingValue != null && (
          <PendingValue
            className={styles.pendingContainer}
            compact={compact}
            numberType={numberType}
            prefix={prefix}
            suffix={suffix}
            value={pendingValue}
          />
        )}
      </span>
    </div>
  );
}
