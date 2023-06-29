import cn from 'classnames';
import { useParams } from 'react-router-dom';

import { ValueWithPending } from 'components';
import { useGetTokenSupplyOverviewQuery } from 'services/OverviewPage/GetTokenSupplyOverview';
import { INFRASTRUCTURE_TITLE } from 'types/constants/AnalysisTitles';
import { ElementSize } from 'types/ElementSize';
import { NumberType } from 'types/NumberType';
import { tooltips } from 'types/Tooltips';
import { Card, Divider } from 'ui';

import styles from './ZoneOverviewInfrastructureCard.module.scss';

import { ZoneOverviewInfrastructureCardProps } from '.';

export function ZoneOverviewInfrastructureCard({
  className,
}: ZoneOverviewInfrastructureCardProps): JSX.Element {
  const { zone = '' } = useParams();
  const { data, isLoading } = useGetTokenSupplyOverviewQuery({ zone });

  return (
    <Card
      title={INFRASTRUCTURE_TITLE}
      className={cn(styles.parameterCard, className)}
      loading={isLoading}
    >
      <div className={styles.valuesContainer}>
        <ValueWithPending
          className={styles.valueBlock}
          title={'Validators'}
          value={data?.validatorsCount}
          numberType={NumberType.Number}
          size={ElementSize.LARGE}
        />
        <Divider className={styles.divider} />
        <ValueWithPending
          className={styles.valueBlock}
          title={'Nodes (RPC/REST)'}
          value={data?.nodesCount}
          numberType={NumberType.Number}
          tooltipText={tooltips['nodesCount']()}
          size={ElementSize.LARGE}
        />
      </div>
    </Card>
  );
}
