import cn from 'classnames';

import { ExplanationTooltip, NumberFormat, PendingValue, SkeletonTextWrapper } from 'components';
import { PeriodBlock } from 'components/PeriodBlock';
import { NumberType } from 'components/ui/NumberFormat/NumberType';
import { ElementSize } from 'types/ElementSize';

import styles from './ValueWithPending.module.scss';
import { ValueWithPendingProps } from './ValueWithPending.props';

export function ValueWithPending({
  alignRight = false,
  children,
  className,
  compact = false,
  defaultSkeletonText,
  titleIcon,
  loading = false,
  numberType = NumberType.Number,
  pendingValue,
  showPeriod = false,
  size = ElementSize.MEDIUM,
  title,
  tooltipText,
  value,
  variants = 'primary',
  ...props
}: ValueWithPendingProps) {
  return (
    <div
      className={cn(className, styles.container, [styles[variants]], {
        [styles.sm]: size === ElementSize.SMALL,
        [styles.md]: size === ElementSize.MEDIUM,
        [styles.lg]: size === ElementSize.LARGE,
      })}
      {...props}
    >
      {title && (
        <>
          <span className={styles.title}>
            {titleIcon && <span className={styles.icon}>{titleIcon}</span>}
            {title}
            {showPeriod && <PeriodBlock className={styles.periodText} />}
            {tooltipText && <ExplanationTooltip text={tooltipText} />}
          </span>
        </>
      )}

      <span
        className={cn(styles.valueContainer, {
          [styles.rightAlign]: alignRight,
        })}
      >
        <SkeletonTextWrapper loading={loading} defaultText={defaultSkeletonText}>
          {children}
          {!children && <NumberFormat compact={compact} numberType={numberType} value={value} />}
        </SkeletonTextWrapper>

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
