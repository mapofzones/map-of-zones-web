import cn from 'classnames';

import { NumberFormat, PendingValue } from 'components';
import { NumberType } from 'components/ui/NumberFormat/NumberType';
import { ElementSize } from 'types/ElementSize';

import styles from './ValueWithTitle.module.scss';
import { ValueWithTitleProps } from './ValueWithTitle.props';

export function ValueWithTitle({
  alignRight = false,
  children,
  className,
  numberType = NumberType.Number,
  pendingValue,
  title,
  prefix,
  suffix,
  value,
  size = ElementSize.MEDIUM,
}: ValueWithTitleProps) {
  return (
    <div
      className={cn(className, styles.container, {
        [styles.rightAlign]: alignRight,
        [styles.sm]: size === ElementSize.SMALL,
        [styles.md]: size === ElementSize.MEDIUM,
        [styles.lg]: size === ElementSize.LARGE,
      })}
    >
      {title && <span className={styles.title}>{title}</span>}
      <span className={cn(className, styles.valueContainer)}>
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
    </div>
  );
}
