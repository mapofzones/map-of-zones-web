import cn from 'classnames';

import styles from './AnalysisCardLegend.module.scss';
import { AnalysisCardLegendItemProps } from './AnalysisCardLegendItem';

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
