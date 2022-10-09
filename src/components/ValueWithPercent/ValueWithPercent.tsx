import cn from 'classnames';

import { NumberFormat } from 'components';
import { NumberType } from 'components/ui/NumberFormat/NumberType';

import styles from './ValueWithPercent.module.scss';
import { ValueWithPercentProps } from './ValueWithPercent.props';

export function ValueWithPercent({
  className,
  numberType = NumberType.Number,
  percentValue,
  value,
  ...props
}: ValueWithPercentProps) {
  return (
    <div className={cn(styles.container, className)} {...props}>
      <NumberFormat numberType={numberType} value={value} />

      {percentValue != null && (
        <NumberFormat
          className={styles.percentContainer}
          decimalSeparator=","
          fractionOpacity={1}
          maxSignificantDigits={0}
          minFractionDigits={1}
          numberType={NumberType.Percent}
          value={percentValue}
        />
      )}
    </div>
  );
}
