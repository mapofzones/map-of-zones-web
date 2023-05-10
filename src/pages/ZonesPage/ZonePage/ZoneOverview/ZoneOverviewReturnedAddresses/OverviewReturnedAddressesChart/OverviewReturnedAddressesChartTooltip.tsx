import { Circle, NumberType } from 'ui';
import { NumberFormat } from 'ui/NumberFormat/NumberFormat';

import styles from './OverviewReturnedAddressesChart.module.scss';
import { RETURNED_ADDRESSES_TITLE } from '../ZoneOverviewReturnedAddresses';

export function OverviewReturnedAddressesChartTooltip({ data, active }: any) {
  const { returnedRate, returnedAddresses, prevTotalAddresses } = data;

  if (data && active) {
    return (
      <div className={styles.tooltipContainer}>
        <div className={styles.tooltipItem}>
          <Circle color="var(--blue)" />
          <span className={styles.description}>{RETURNED_ADDRESSES_TITLE}</span>
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
