import cn from 'classnames';

import styles from './AnalysisCardLegend.module.scss';
import { AnalysisCardLegendItemProps, AnalysisLegendItem } from './AnalysisCardLegendItem';
import { AnalysisLegendAdditionalText } from './AnalysisLegendAdditionalText';

export function AnalysisCardLegend({
  className,
  children,
}: {
  className?: string;
  children?:
    | React.ReactElement<AnalysisCardLegendItemProps>
    | React.ReactElement<AnalysisCardLegendItemProps>[];
}) {
  return <div className={cn(className, styles.cardLegend)}>{children}</div>;
}

AnalysisCardLegend.Item = AnalysisLegendItem;
AnalysisCardLegend.AdditionalText = AnalysisLegendAdditionalText;
