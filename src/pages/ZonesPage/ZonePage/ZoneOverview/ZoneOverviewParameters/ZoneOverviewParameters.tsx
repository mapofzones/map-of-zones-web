import cn from 'classnames';

import { Divider, NumberFormat, NumberType, TotalCard } from 'components';
import { ValueWithTitle } from 'components/ValueWithTitle/ValueWithTitle';
import { ElementSize } from 'types/ElementSize';

import styles from './ZoneOverviewParameters.module.scss';

export function ZoneOverviewParameters({ className }: { className?: string }) {
  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.title}>Parameters</div>
      <div className={styles.parametersCards}>
        <TotalCard className={styles.parameterCard}>
          <ValueWithTitle
            title={'Inflation'}
            value={18.5}
            numberType={NumberType.Percent}
            size={ElementSize.LARGE}
          />
          <Divider />
          <div>
            <ValueWithTitle
              title={'Staking APR'}
              value={14.5}
              numberType={NumberType.Percent}
              size={ElementSize.LARGE}
            />
            <div className={styles.additionalInfo}>
              {'Unbonding period: '}
              <NumberFormat className={styles.additionalInfo_value} value={10} />
            </div>
          </div>
        </TotalCard>
        <TotalCard className={styles.parameterCard}>
          <ValueWithTitle
            title={'On-Chain Supply'}
            value={205095123}
            numberType={NumberType.Number}
            size={ElementSize.LARGE}
          />
          <Divider />
          <div>
            <ValueWithTitle title={'Total Bonded Rate'} size={ElementSize.LARGE}>
              162M / 205M
            </ValueWithTitle>
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
          <ValueWithTitle
            title={'Validators'}
            value={115}
            numberType={NumberType.Number}
            size={ElementSize.LARGE}
          />
          <Divider />
          <ValueWithTitle
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
