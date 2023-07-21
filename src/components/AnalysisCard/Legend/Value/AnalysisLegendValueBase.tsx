import cn from 'classnames';

import styles from './AnalysisLegendValueBase.module.scss';

interface LegendValueBaseProps {
  children?: React.ReactNode;
  className?: string;
  size?: LegendValueSize;
}

export type LegendValueSize = 'sm' | 'md' | 'lg';

export function LegendValueBase({ children, className, size = 'sm' }: LegendValueBaseProps) {
  return <span className={cn(className, styles[size])}>{children}</span>;
}
