import cn from 'classnames';
import { useParams } from 'react-router-dom';

import { useGetTokenSupplyOverviewQuery } from 'services/OverviewPage/GetTokenSupplyOverview';
import { Card, Divider } from 'ui';

import { StackingBlock } from './StackingBlock';
import { TotalBondenRateBlock } from './TotalBondenRateBlock';
import styles from './ZoneOverviewStakingCard.module.scss';

import { ZoneOverviewStakingCardProps } from '.';

export function ZoneOverviewStakingCard({ className }: ZoneOverviewStakingCardProps): JSX.Element {
  const { zone = '' } = useParams();
  const { data, isLoading } = useGetTokenSupplyOverviewQuery({ zone });

  return (
    <Card title="Staking" className={cn(styles.parameterCard, className)} loading={isLoading}>
      {data && (
        <div className={styles.valuesContainer}>
          <StackingBlock data={data} className={styles.valueBlock} />
          <Divider className={styles.divider} />
          <TotalBondenRateBlock data={data} className={styles.valueBlock} />
        </div>
      )}
    </Card>
  );
}
