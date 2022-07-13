import cn from 'classnames';

import { ZoneLogo } from 'components';

import styles from './PeerLineChart.module.scss';
import { PeerLineChartProps } from './PeerLineChart.props';

const LOGO_SIZE = '32px';

export function PeerLineChart({
  zone,
  counterparty,
  className,
  ...props
}: PeerLineChartProps): JSX.Element {
  return (
    <div className={cn(styles.chartContainer, className)} {...props}>
      <ZoneLogo logoUrl={zone?.logoUrl} name={zone?.name} size={LOGO_SIZE} />
      <hr className={styles.volumeOutLine} style={{ width: `${counterparty.volumeOutPercent}%` }} />
      <hr className={styles.volumeInLine} style={{ width: `${counterparty.volumeInPercent}%` }} />
      <div className={styles.logoContainer}>
        <ZoneLogo
          logoUrl={counterparty.zoneCounterpartyLogoUrl}
          name={counterparty.zoneCounterpartyName}
          size={LOGO_SIZE}
        />
      </div>
    </div>
  );
}
