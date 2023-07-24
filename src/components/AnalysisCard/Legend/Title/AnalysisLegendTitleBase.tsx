import cn from 'classnames';

import styles from './AnalysisLegendTitleBase.module.scss';

export type AnalysisLegendTitleBaseSizes = 'sm' | 'md' | 'lg';

interface AnalysisLegendTitleBaseProps {
  children?: React.ReactNode;
  size?: AnalysisLegendTitleBaseSizes;
}

export function AnalysisLegendTitleBase({ children, size = 'sm' }: AnalysisLegendTitleBaseProps) {
  return <span className={cn(styles.title, styles[size])}>{children}</span>;
}
