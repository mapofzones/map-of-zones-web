import cn from 'classnames';

import { Divider, NumberFormat, NumberType, TotalCard, ValueWithPending } from 'components';
import { ElementSize } from 'types/ElementSize';

import styles from './ZoneOverviewParameters.module.scss';

export function ZoneOverviewParameters({ className }: { className?: string }) {
  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.title}>Parameters</div>
      <div className={styles.parametersCards}>
        <TotalCard className={styles.parameterCard}>
          <ValueWithPending
            title={'Inflation'}
            value={18.5}
            numberType={NumberType.Percent}
            size={ElementSize.LARGE}
          />
          <Divider />
          <div>
            <ValueWithPending
              title={'Staking APR'}
              value={14.5}
              numberType={NumberType.Percent}
              size={ElementSize.LARGE}
            />
            <div className={styles.additionalInfo}>
              {'Unbonding period: '}
              <span className={styles.additionalInfo_value}>{8}d</span>
            </div>
          </div>
        </TotalCard>
        <TotalCard className={styles.parameterCard}>
          <ValueWithPending
            title={'On-Chain Supply'}
            value={205095123}
            numberType={NumberType.Number}
            size={ElementSize.LARGE}
          />
          <Divider />
          <div>
            <ValueWithPending title={'Total Bonded Rate'} size={ElementSize.LARGE}>
              <div className={styles.bondedRateValueContainer}>
                <NumberFormat value={162000000} compact />
                <span className={styles.secondValue}>
                  &nbsp;/&nbsp;
                  <NumberFormat value={205000000} compact />
                </span>
              </div>
            </ValueWithPending>
            <div className={styles.additionalInfo}>
              {'Ratio: '}
              <NumberFormat
                className={styles.additionalInfo_value}
                value={90.5}
                numberType={NumberType.Percent}
              />
            </div>
          </div>
        </TotalCard>
        <TotalCard className={styles.parameterCard}>
          <ValueWithPending
            title={'Validators'}
            value={115}
            numberType={NumberType.Number}
            size={ElementSize.LARGE}
          />
          <Divider />
          <ValueWithPending
            title={'Nodes'}
            value={1270}
            numberType={NumberType.Number}
            size={ElementSize.LARGE}
          />
        </TotalCard>
      </div>
    </div>
  );
}
