import { ReactNode } from 'react';

import cn from 'classnames';

import styles from './AnalysisCardLegendItem.module.scss';

export interface AnalysisCardLegendItemProps {
  className?: string;
  children?: ReactNode;
}

export function AnalysisLegendItem({ className, children }: AnalysisCardLegendItemProps) {
  return <div className={cn(className, styles.container)}>{children}</div>;
}
