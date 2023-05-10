import cn from 'classnames';

import { ActivityComparisonCard } from './ActivityComparisonCard';
import styles from './ComparisonPage.module.scss';
import { InterchainComparisonCard } from './InterchainComparisonCard';

import { ComparisonPageProps } from '.';

export function ComparisonPage({ className, ...props }: ComparisonPageProps): JSX.Element {
  return (
    <div className={cn(className, styles.container)} {...props}>
      <div className={styles.header}>
        <div className={styles.title}>Comparison</div>
      </div>
      <ActivityComparisonCard className={styles.activityCard} />
      <InterchainComparisonCard className={styles.interchainCard} />
    </div>
  );
}
