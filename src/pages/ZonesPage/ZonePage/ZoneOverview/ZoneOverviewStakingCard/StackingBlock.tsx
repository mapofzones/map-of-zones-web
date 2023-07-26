import { ValueWithPending } from 'components';
import { SECONDS_IN_DAY } from 'types/constants';
import { STACKING_APR_TITLE } from 'types/constants/AnalysisTitles';
import { ElementSize } from 'types/ElementSize';
import { ZoneAnalysisBlockchainParametersData } from 'types/models/Analysis/ZoneAnalysisBlockchainParametersData';
import { NumberType } from 'types/NumberType';
import { NumberFormat } from 'ui';

import styles from './ZoneOverviewStakingCard.module.scss';

export function StackingBlock({
  data,
  className,
}: {
  className?: string;
  data: ZoneAnalysisBlockchainParametersData;
}) {
  return (
    <div className={className}>
      <ValueWithPending
        title={STACKING_APR_TITLE}
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