import { PeriodBlock } from 'components/PeriodBlock';
import { ExplanationTooltip } from 'ui';
import { Circle } from 'ui/Circle';

import { LegendTitleBase } from './LegendTitleBase';
import styles from './OverviewLegendTitle.module.scss';

interface OverviewLegendTitleProps {
  title?: string;
  circleColor?: string;
  tooltipText?: string;
  showPeriod?: boolean;
}

export function OverviewLegendTitle({
  title,
  circleColor,
  tooltipText,
  showPeriod = false,
}: OverviewLegendTitleProps) {
  return (
    <LegendTitleBase>
      {circleColor && <Circle className={styles.icon} color={circleColor} />}
      {title}
      {showPeriod && <PeriodBlock className={styles.periodText} />}
      {tooltipText && <ExplanationTooltip text={tooltipText} />}
    </LegendTitleBase>
  );
}
