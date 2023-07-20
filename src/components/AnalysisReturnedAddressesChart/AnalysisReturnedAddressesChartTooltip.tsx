import { TooltipProps } from 'recharts';

import { DatasetInfo } from 'types/DatasetInfo';
import { ZoneAnalysisReturnedAddressesDataByType } from 'types/models/Analysis/ZoneAnalysisReturnedAddressesData';
import { NumberType } from 'types/NumberType';
import { Circle } from 'ui';
import { NumberFormat } from 'ui/NumberFormat/NumberFormat';

import styles from './AnalysisReturnedAddressesChart.module.scss';

interface AnalysisReturnedAddressesChartTooltipProps
  extends TooltipProps<number | string, number | string> {
  data: ZoneAnalysisReturnedAddressesDataByType[];
  metadata: DatasetInfo[];
}

export function AnalysisReturnedAddressesChartTooltip({
  data,
  metadata,
  active,
  ...props
}: AnalysisReturnedAddressesChartTooltipProps) {
  if (props.label === undefined) {
    return <></>;
  }

  const item = data[props.label] ?? {};
  const itemMetadata = Object.values(metadata)[props.label] as DatasetInfo;
  const { returnedRate, returnedAddresses, prevTotalAddresses } = item;

  if (active) {
    return (
      <div className={styles.tooltipContainer}>
        <div className={styles.tooltipItem}>
          <Circle color={itemMetadata.color || 'var(--blue'} />
          <span className={styles.description}>{itemMetadata.title}</span>
          <NumberFormat
            value={returnedRate ? returnedRate * 100 : undefined}
            numberType={NumberType.Percent}
          />
          &nbsp;
          <span className={styles.additional}>
            (<NumberFormat value={returnedAddresses} /> /{' '}
            <NumberFormat value={prevTotalAddresses} />)
          </span>
        </div>
      </div>
    );
  }

  return null;
}
