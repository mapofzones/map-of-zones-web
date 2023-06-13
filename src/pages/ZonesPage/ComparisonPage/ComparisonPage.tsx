import cn from 'classnames';

import { ActivityComparisonCard } from './ActivityComparisonCard';
import styles from './ComparisonPage.module.scss';
import { IbcTransfersComparisonCard } from './IbcTransfersComparisonCard';
import { IbcVolumeComparisonCard } from './IbcVolumeComparisonCard';
import { InterchainComparisonCard } from './InterchainComparisonCard';
import { BlockchainParametersComparisonProvider } from './providers/BlockchainParametersComparisonProvider';
import {
  ComparisonSelectedZonesProvider,
  useComparisonSelectedZones,
} from './providers/ComparisonSelectedZonesProvider';
import { TokenComparisonCard } from './TokenComparisonCard';
import { TokenSupplyComparisonCard } from './TokenSupplyComparisonCard';
import { TransactionsComparisonCard } from './TransactionsComparisonCard';
import { ZonesComparisonSelectors } from './ZonesComparisonSelectors';

import { ComparisonPageProps } from '.';

function ComparisonPageContent({ className, ...props }: ComparisonPageProps) {
  const { selectedZones } = useComparisonSelectedZones();

  return (
    <div className={cn(className, styles.container)} {...props}>
      <div className={styles.header}>
        <div className={styles.title}>Comparison</div>
        <ZonesComparisonSelectors />
      </div>
      <ActivityComparisonCard className={styles.activityCard} />
      <InterchainComparisonCard className={styles.interchainCard} />
      <TokenComparisonCard className={styles.tokenCard} />
      <IbcVolumeComparisonCard className={styles.ibcVolumeCard} />
      <BlockchainParametersComparisonProvider zones={selectedZones}>
        <TokenSupplyComparisonCard className={styles.tokenSupplyCard} />
      </BlockchainParametersComparisonProvider>
      <TransactionsComparisonCard className={styles.transactionCard} />
      <IbcTransfersComparisonCard className={styles.transfersCard} />
    </div>
  );
}

export function ComparisonPage({ className, ...props }: ComparisonPageProps): JSX.Element {
  return (
    <ComparisonSelectedZonesProvider>
      <ComparisonPageContent className={className} {...props}></ComparisonPageContent>
    </ComparisonSelectedZonesProvider>
  );
}
