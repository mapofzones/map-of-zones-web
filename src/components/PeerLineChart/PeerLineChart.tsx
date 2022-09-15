import cn from 'classnames';

import { PercentStackedLineChart, ZoneLogo } from 'components';

import styles from './PeerLineChart.module.scss';
import { PeerLineChartProps } from './PeerLineChart.props';

const LOGO_SIZE = '32px';

export function PeerLineChart({
  zone,
  counterparty,
  volumeInPercent,
  volumeOutPercent,
  className,
  ...props
}: PeerLineChartProps): JSX.Element {
  return (
    <div className={cn(styles.chartContainer, className)} {...props}>
      <ZoneLogo logoUrl={zone?.logoUrl} name={zone?.name} size={LOGO_SIZE} />
      <PercentStackedLineChart
        leftValue={volumeOutPercent}
        rightValue={volumeInPercent}
        rightCustomColor={`#EE11CC80`}
      />
      <ZoneLogo logoUrl={counterparty?.logoUrl} name={counterparty?.name} size={LOGO_SIZE} />
    </div>
  );
}
