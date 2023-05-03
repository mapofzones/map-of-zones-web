import { ReactNode } from 'react';

import cn from 'classnames';

import styles from './OverviewLegendItem.module.scss';

export interface OverviewLegendItemProps {
  className?: string;
  children?: ReactNode;
}

export function OverviewLegendItem({ className, children }: OverviewLegendItemProps) {
  return <div className={cn(className, styles.container)}>{children}</div>;
}
