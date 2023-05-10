import { ValueWithPending } from 'components';
import { ElementSize } from 'types/ElementSize';
import { NumberFormat, NumberType } from 'ui';

import { ZoneOverviewParametersData } from './useZoneOverviewParameters';
import styles from './ZoneOverviewParameters.module.scss';

export function TotalBondenRateBlock({
  data,
  className,
}: {
  className?: string;
  data: ZoneOverviewParametersData;
}) {
  return (
    <div className={className}>
      <ValueWithPending title={'Total Bonded Rate'} size={ElementSize.LARGE}>
        <div className={styles.bondedRateValueContainer}>
          <NumberFormat value={data?.bondedTokens} compact />
          <span className={styles.secondValue}>
            &nbsp;/&nbsp;
            <NumberFormat value={data?.onChainSupply} compact />
          </span>
        </div>
      </ValueWithPending>
      <div className={styles.additionalInfo}>
        {'Ratio: '}
        <NumberFormat
          className={styles.additionalInfo_value}
          value={data?.bondedTokensPercent}
          numberType={NumberType.Percent}
        />
      </div>
    </div>
  );
}
