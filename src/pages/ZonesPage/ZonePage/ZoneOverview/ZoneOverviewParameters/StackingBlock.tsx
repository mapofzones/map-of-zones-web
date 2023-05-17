import { ValueWithPending } from 'components';
import { SECONDS_IN_DAY } from 'types/constants';
import { ElementSize } from 'types/ElementSize';
import { NumberType } from 'types/NumberType';
import { NumberFormat } from 'ui';

import { ZoneOverviewParametersData } from './useZoneOverviewParameters';
import styles from './ZoneOverviewParameters.module.scss';

export function StackingBlock({
  data,
  className,
}: {
  className?: string;
  data: ZoneOverviewParametersData;
}) {
  return (
    <div className={className}>
      <ValueWithPending
        title={'Staking APR'}
        value={data.stackingApr}
        numberType={NumberType.Percent}
        size={ElementSize.LARGE}
      />
      <div className={styles.additionalInfo}>
        {'Unbonding period: '}
        <span className={styles.additionalInfo_value}>
          <NumberFormat
            value={data?.unbondingPeriod ? data.unbondingPeriod / SECONDS_IN_DAY : undefined}
          />
          d
        </span>
      </div>
    </div>
  );
}
