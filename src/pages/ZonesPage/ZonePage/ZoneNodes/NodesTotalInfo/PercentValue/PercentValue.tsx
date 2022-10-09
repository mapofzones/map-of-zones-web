import cn from 'classnames';

import { NumberFormat, NumberType } from 'components';

import styles from './PercentValue.module.scss';

export function PercentValue({
  className,
  value,
}: {
  className?: string;
  value: number;
}): JSX.Element {
  return (
    <NumberFormat
      className={cn(styles.value, className)}
      decimalSeparator=","
      fractionOpacity={1}
      maxSignificantDigits={0}
      minFractionDigits={1}
      numberType={NumberType.Percent}
      value={value}
    />
  );
}
