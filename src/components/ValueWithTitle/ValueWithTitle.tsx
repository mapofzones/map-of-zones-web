import { ValueWithPending } from 'components';
import { NumberType } from 'components/ui/NumberFormat/NumberType';

import styles from './ValueWithTitle.module.scss';
import { ValueWithTitleProps } from './ValueWithTitle.props';

export function ValueWithTitle({
  alignRight = false,
  children,
  className,
  numberType = NumberType.Number,
  pendingValue,
  title,
  value,
}: ValueWithTitleProps) {
  return (
    <div className={className}>
      <span className={styles.title}>{title}</span>
      <ValueWithPending
        numberType={numberType}
        value={value}
        pendingValue={pendingValue}
        alignRight={alignRight}
        className={styles.value}
      >
        {children}
      </ValueWithPending>
    </div>
  );
}
