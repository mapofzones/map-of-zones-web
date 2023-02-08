import { NumberFormat, NumberType } from 'components/ui';

import styles from './LegendNumberValue.module.scss';
import { LegendValueBase } from './LegendValueBase';

interface LegendNumberValueProps {
  value?: number;
  numberType?: NumberType;
  compact?: boolean;
}

export function LegendNumberValue({
  value,
  numberType = NumberType.Number,
  compact = false,
}: LegendNumberValueProps) {
  return (
    <LegendValueBase>
      <NumberFormat
        className={styles.value}
        compact={compact}
        numberType={numberType}
        value={value}
      />
    </LegendValueBase>
  );
}
