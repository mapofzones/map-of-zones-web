import cn from 'classnames';

import { ExplanationTooltip, NumberFormat, PendingValue } from 'components';
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
  size = ElementSize.MEDIUM,
  title,
  value,
  tooltipPosition = 'left',
  tooltipText,
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
      {tooltipText && <ExplanationTooltip text={tooltipText} position={tooltipPosition} />}

      <span
        className={cn(styles.valueContainer, {
          [styles.rightAlign]: alignRight,
        })}
      >
        {children}
        {!children && <NumberFormat compact={compact} numberType={numberType} value={value} />}
        {pendingValue != null && (
          <PendingValue
            className={styles.pendingContainer}
            compact={compact}
            numberType={numberType}
            value={pendingValue}
          />
        )}
      </span>
    </div>
  );
}
