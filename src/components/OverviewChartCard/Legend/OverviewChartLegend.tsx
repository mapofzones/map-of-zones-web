import cn from 'classnames';

import styles from './OverviewChartLegend.module.scss';
import { OverviewLegendItemProps } from './OverviewLegendItem';

export function OverviewChartLegend({
  className,
  children,
}: {
  className?: string;
  children?:
    | React.ReactElement<OverviewLegendItemProps>
    | React.ReactElement<OverviewLegendItemProps>[];
}) {
  return <div className={cn(className, styles.cardLegend)}>{children}</div>;
}
