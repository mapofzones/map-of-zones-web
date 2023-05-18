import cn from 'classnames';

import styles from './AnalysisChartControlsContainer.module.scss';
import { AnalysisChartControlsContainerProps } from './AnalysisChartControlsContainer.props';

export function AnalysisChartControlsContainer({
  className,
  children,
  ...props
}: AnalysisChartControlsContainerProps): JSX.Element {
  return (
    <div className={cn(className, styles.chartControls)} {...props}>
      {children}
    </div>
  );
}
