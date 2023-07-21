import { NumberType } from 'types/NumberType';
import { NumberFormat } from 'ui';

import styles from './AnalysisLegendNumberValue.module.scss';
import { LegendValueBase, LegendValueSize } from './AnalysisLegendValueBase';

interface LegendNumberValueProps {
  value?: number;
  numberType?: NumberType;
  compact?: boolean;
  size?: LegendValueSize;
}

export function LegendNumberValue({
  value,
  numberType = NumberType.Number,
  size = 'sm',
  compact = false,
}: LegendNumberValueProps) {
  return (
    <LegendValueBase size={size}>
      <NumberFormat
        className={styles.value}
        compact={compact}
        numberType={numberType}
        value={value}
      />
    </LegendValueBase>
  );
}
