import cn from 'classnames';

import styles from './PeerLineChart.module.scss';
import { PeerLineChartProps } from './PeerLineChart.props';

export function PeerLineChart({
  zone,
  counterparty,
  className,
  ...props
}: PeerLineChartProps): JSX.Element {
  return (
    <div className={cn(styles.chartContainer, className)} {...props}>
      <div className={styles.logoContainer}>
        {zone.logoUrl && (
          <img className={styles.logo} src={zone.logoUrl} alt={`${zone.name} logo`} />
        )}
      </div>
      <hr className={styles.volumeOutLine} style={{ width: `${counterparty.volumeOutPercent}%` }} />
      <hr className={styles.volumeInLine} style={{ width: `${counterparty.volumeInPercent}%` }} />
      <div className={styles.logoContainer}>
        {counterparty.zoneCounterpartyLogoUrl && (
          <img
            className={styles.logo}
            src={counterparty.zoneCounterpartyLogoUrl}
            alt={`${counterparty.zoneCounterpartyName} logo`}
          />
        )}
      </div>
    </div>
  );
}
