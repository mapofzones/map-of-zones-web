import cn from 'classnames';

import { Divider, NumberFormat, NumberType, TotalCard, ValueWithPending } from 'components';
import { ElementSize } from 'types/ElementSize';

import { useZoneOverviewParameters } from './useZoneOverviewParameters';
import styles from './ZoneOverviewParameters.module.scss';

export function ZoneOverviewParameters({ className }: { className?: string }) {
  const { data } = useZoneOverviewParameters();

  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.title}>Parameters</div>
      <div className={styles.parametersCards}>
        <TotalCard className={styles.parameterCard}>
          <ValueWithPending
            title={'Inflation'}
            value={data?.inflation}
            numberType={NumberType.Percent}
            size={ElementSize.LARGE}
          />
          <Divider />
          <div>
            <ValueWithPending
              title={'Staking APR'}
              value={data.stackingApr}
              numberType={NumberType.Percent}
              size={ElementSize.LARGE}
            />
            <div className={styles.additionalInfo}>
              {'Unbonding period: '}
              <span className={styles.additionalInfo_value}>
                <NumberFormat value={data?.unbondingPeriod} />d
              </span>
            </div>
          </div>
        </TotalCard>
        <TotalCard className={styles.parameterCard}>
          <ValueWithPending
            title={'On-Chain Supply'}
            value={data?.onChainSupply}
            numberType={NumberType.Number}
            size={ElementSize.LARGE}
          />
          <Divider />
          <div>
            <ValueWithPending title={'Total Bonded Rate'} size={ElementSize.LARGE}>
              <div className={styles.bondedRateValueContainer}>
                <NumberFormat value={data?.bondedTokens} compact />
                <span className={styles.secondValue}>
                  &nbsp;/&nbsp;
                  <NumberFormat value={data?.bondedTokens} compact />
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
        </TotalCard>
        <TotalCard className={styles.parameterCard}>
          <ValueWithPending
            title={'Validators'}
            value={data?.validatorsCnt}
            numberType={NumberType.Number}
            size={ElementSize.LARGE}
          />
          <Divider />
          <ValueWithPending
            title={'Nodes'}
            value={data?.nodesCnt}
            numberType={NumberType.Number}
            size={ElementSize.LARGE}
          />
        </TotalCard>
      </div>
    </div>
  );
}
