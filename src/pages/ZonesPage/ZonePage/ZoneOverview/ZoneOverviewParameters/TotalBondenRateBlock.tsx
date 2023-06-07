import { ValueWithPending } from 'components';
import { TOTAL_BONDED_RATE } from 'types/constants/AnalysisTitles';
import { ElementSize } from 'types/ElementSize';
import { ZoneAnalysisBlockchainParametersData } from 'types/models/Analysis/ZoneAnalysisBlockchainParametersData';
import { NumberType } from 'types/NumberType';
import { NumberFormat } from 'ui';

import styles from './ZoneOverviewParameters.module.scss';

export function TotalBondenRateBlock({
  data,
  className,
}: {
  className?: string;
  data: ZoneAnalysisBlockchainParametersData;
}) {
  return (
    <div className={className}>
      <ValueWithPending title={TOTAL_BONDED_RATE} size={ElementSize.LARGE}>
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
