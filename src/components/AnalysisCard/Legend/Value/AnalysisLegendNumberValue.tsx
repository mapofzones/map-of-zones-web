import { NumberType } from 'types/NumberType';
import { NumberFormat } from 'ui';

import styles from './AnalysisLegendNumberValue.module.scss';
import { LegendValueBase } from './AnalysisLegendValueBase';

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
