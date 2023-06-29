import cn from 'classnames';
import { useParams } from 'react-router-dom';

import { ValueWithPending } from 'components';
import { useGetTokenSupplyOverviewQuery } from 'services/OverviewPage/GetTokenSupplyOverview';
import { ON_CHAIN_SUPPLY, INFLATION } from 'types/constants/AnalysisTitles';
import { ElementSize } from 'types/ElementSize';
import { NumberType } from 'types/NumberType';
import { Card, Divider } from 'ui';

import styles from './ZoneOverviewTokenSupplyCard.module.scss';

import { ZoneOverviewTokenSupplyCardProps } from '.';

export function ZoneOverviewTokenSupplyCard({
  className,
}: ZoneOverviewTokenSupplyCardProps): JSX.Element {
  const { zone = '' } = useParams();
  const { data, isLoading } = useGetTokenSupplyOverviewQuery({ zone });

  return (
    <Card title="Token Supply" className={cn(styles.parameterCard, className)} loading={isLoading}>
      <div className={styles.valuesContainer}>
        <ValueWithPending
          className={styles.valueBlock}
          title={ON_CHAIN_SUPPLY}
          value={data?.onChainSupply}
          numberType={NumberType.Number}
          size={ElementSize.LARGE}
        />
        <Divider className={styles.divider} />
        <ValueWithPending
          className={styles.valueBlock}
          title={INFLATION}
          value={data?.inflation}
          numberType={NumberType.Percent}
          size={ElementSize.LARGE}
        />
      </div>
    </Card>
  );
}
