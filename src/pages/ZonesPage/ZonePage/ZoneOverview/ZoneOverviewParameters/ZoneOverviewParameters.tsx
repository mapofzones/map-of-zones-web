import cn from 'classnames';

import { ValueWithPending } from 'components';
import { ElementSize } from 'types/ElementSize';
import { tooltips } from 'types/Tooltips';
import { Card, Divider, NumberType } from 'ui';

import { StackingBlock } from './StackingBlock';
import { TotalBondenRateBlock } from './TotalBondenRateBlock';
import { useZoneOverviewParameters } from './useZoneOverviewParameters';
import styles from './ZoneOverviewParameters.module.scss';

export function ZoneOverviewParameters({ className }: { className?: string }) {
  const { data, loading } = useZoneOverviewParameters();

  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.parametersCards}>
        <Card title="Token Supply" className={styles.parameterCard} loading={loading}>
          <div className={styles.valuesContainer}>
            <ValueWithPending
              className={styles.valueBlock}
              title={'On-Chain Supply'}
              value={data?.onChainSupply}
              numberType={NumberType.Number}
              size={ElementSize.LARGE}
            />
            <Divider className={styles.divider} />
            <ValueWithPending
              className={styles.valueBlock}
              title={'Inflation'}
              value={data?.inflation}
              numberType={NumberType.Percent}
              size={ElementSize.LARGE}
            />
          </div>
        </Card>
        <Card title="Staking" className={styles.parameterCard} loading={loading}>
          <div className={styles.valuesContainer}>
            <StackingBlock data={data} className={styles.valueBlock} />
            <Divider className={styles.divider} />
            <TotalBondenRateBlock data={data} className={styles.valueBlock} />
          </div>
        </Card>
        <Card title="Infrastructure" className={styles.parameterCard} loading={loading}>
          <div className={styles.valuesContainer}>
            <ValueWithPending
              className={styles.valueBlock}
              title={'Validators'}
              value={data?.validatorsCnt}
              numberType={NumberType.Number}
              size={ElementSize.LARGE}
            />
            <Divider className={styles.divider} />
            <ValueWithPending
              className={styles.valueBlock}
              title={'Nodes (RPC/REST)'}
              value={data?.nodesCnt}
              numberType={NumberType.Number}
              tooltipText={tooltips['nodesCount']()}
              size={ElementSize.LARGE}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
