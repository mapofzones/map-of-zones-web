import cn from 'classnames';

import { Divider, NumberType, TotalCard, ValueWithPending } from 'components';
import { ElementSize } from 'types/ElementSize';
import { tooltips } from 'types/Tooltips';

import { StackingBlock } from './StackingBlock';
import { TotalBondenRateBlock } from './TotalBondenRateBlock';
import { useZoneOverviewParameters } from './useZoneOverviewParameters';
import styles from './ZoneOverviewParameters.module.scss';

export function ZoneOverviewParameters({ className }: { className?: string }) {
  const { data, loading } = useZoneOverviewParameters();

  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.parametersCards}>
        <TotalCard title="Economic Metrics" className={styles.parameterCard} loading={loading}>
          <ValueWithPending
            className={styles.valueBlock}
            title={'On-Chain Supply'}
            value={data?.onChainSupply}
            numberType={NumberType.Number}
            size={ElementSize.LARGE}
          />
          <Divider />
          <ValueWithPending
            className={styles.valueBlock}
            title={'Inflation'}
            value={data?.inflation}
            numberType={NumberType.Percent}
            size={ElementSize.LARGE}
          />
        </TotalCard>
        <TotalCard title="Staking Metrics" className={styles.parameterCard} loading={loading}>
          <StackingBlock data={data} className={styles.valueBlock} />
          <Divider />
          <TotalBondenRateBlock data={data} className={styles.valueBlock} />
        </TotalCard>
        <TotalCard
          title="Infrastructure Metrics"
          className={styles.parameterCard}
          loading={loading}
        >
          <ValueWithPending
            className={styles.valueBlock}
            title={'Validators'}
            value={data?.validatorsCnt}
            numberType={NumberType.Number}
            size={ElementSize.LARGE}
          />
          <Divider />
          <ValueWithPending
            className={styles.valueBlock}
            title={'Nodes (RPC/REST)'}
            value={data?.nodesCnt}
            numberType={NumberType.Number}
            tooltipText={tooltips['nodesCount']()}
            size={ElementSize.LARGE}
          />
        </TotalCard>
      </div>
    </div>
  );
}
