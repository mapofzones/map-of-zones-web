import { PeriodBlock } from 'components/PeriodBlock';
import { ExplanationTooltip } from 'ui';
import { Circle } from 'ui/Circle';

import styles from './AnalysisLegendTitle.module.scss';
import { AnalysisLegendTitleBase, AnalysisLegendTitleBaseSizes } from './AnalysisLegendTitleBase';

interface AnalysisLegendTitleProps {
  title?: string;
  circleColor?: string;
  tooltipText?: string;
  showPeriod?: boolean;
  size?: AnalysisLegendTitleBaseSizes;
}

export function AnalysisLegendTitle({
  title,
  circleColor,
  tooltipText,
  showPeriod = false,
  size = 'sm',
}: AnalysisLegendTitleProps) {
  return (
    <AnalysisLegendTitleBase size={size}>
      {circleColor && <Circle className={styles.icon} color={circleColor} />}
      {title}
      {showPeriod && <PeriodBlock className={styles.periodText} />}
      {tooltipText && <ExplanationTooltip text={tooltipText} />}
    </AnalysisLegendTitleBase>
  );
}
