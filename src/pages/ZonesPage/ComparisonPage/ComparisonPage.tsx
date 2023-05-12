import cn from 'classnames';

import { ActivityComparisonCard } from './ActivityComparisonCard';
import styles from './ComparisonPage.module.scss';
import { ComparisonSelectedZonesProvider } from './context/ComparisonSelectedZonesProvider';
import { InterchainComparisonCard } from './InterchainComparisonCard';
import { ZonesComparisonSelectors } from './ZonesComparisonSelectors';

import { ComparisonPageProps } from '.';

export function ComparisonPage({ className, ...props }: ComparisonPageProps): JSX.Element {
  return (
    <ComparisonSelectedZonesProvider>
      <div className={cn(className, styles.container)} {...props}>
        <div className={styles.header}>
          <div className={styles.title}>Comparison</div>
          <ZonesComparisonSelectors />
        </div>
        <ActivityComparisonCard className={styles.activityCard} />
        <InterchainComparisonCard className={styles.interchainCard} />
      </div>
    </ComparisonSelectedZonesProvider>
  );
}
