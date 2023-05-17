import { useQuery } from '@apollo/client';

import { NetworkMarketCapInfoDocument } from 'graphql/v2/common/__generated__/CosmosNetworkMarketCap.query.generated';
import { NumberType } from 'types/NumberType';
import { NumberFormat, SkeletonTextWrapper } from 'ui';

import styles from './MarketCapContainer.module.scss';

export function MarketCapContainer() {
  const { data, loading } = useQuery(NetworkMarketCapInfoDocument);

  return (
    <div className={styles.marketCapContainer}>
      <span className={styles.marketCapTitle}>Cosmos Network Market Cap: </span>
      <SkeletonTextWrapper loading={loading} defaultText={'$13 686 000 000'}>
        <NumberFormat
          className={styles.marketCapValue}
          value={data?.networkMarketCap.aggregate?.sum?.marketCap}
          numberType={NumberType.Currency}
        />
      </SkeletonTextWrapper>
    </div>
  );
}
