import cn from 'classnames';

import { Divider, NumberType, TotalCard } from 'components';
import { ValueWithTitle } from 'components/ValueWithTitle/ValueWithTitle';

import styles from './ZoneOverviewParameters.module.scss';

export function ZoneOverviewParameters({ className }: { className?: string }) {
  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.title}>Parameters</div>
      <div className={styles.parametersCards}>
        <TotalCard className={styles.parameterCard}>
          <ValueWithTitle title={'Inflation'} value={18.5} numberType={NumberType.Percent} />
          <Divider />
          <ValueWithTitle title={'Staking APR'} value={14.5} numberType={NumberType.Percent} />
        </TotalCard>
        <TotalCard className={styles.parameterCard}>
          <ValueWithTitle
            title={'On-Chain Supply'}
            value={205095123}
            numberType={NumberType.Number}
          />
          <Divider />
          <ValueWithTitle title={'Total Bonded Rate'}>162M / 205M</ValueWithTitle>
        </TotalCard>
        <TotalCard className={styles.parameterCard}>
          <ValueWithTitle title={'Validators'} value={115} numberType={NumberType.Number} />
          <Divider />
          <ValueWithTitle title={'Nodes'} value={1270} numberType={NumberType.Number} />
        </TotalCard>
      </div>
    </div>
  );
}