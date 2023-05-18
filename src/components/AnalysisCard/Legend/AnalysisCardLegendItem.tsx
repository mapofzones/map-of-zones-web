import { ReactNode } from 'react';

import cn from 'classnames';

import styles from './AnalysisCardLegendItem.module.scss';
import { AnalysisLegendTitle } from './Title/AnalysisLegendTitle';
import { AnalysisLegendTitleBase } from './Title/AnalysisLegendTitleBase';
import { LegendNumberValue } from './Value/AnalysisLegendNumberValue';
import { LegendValueBase } from './Value/AnalysisLegendValueBase';

export interface AnalysisCardLegendItemProps {
  className?: string;
  children?: ReactNode;
}

export function AnalysisLegendItem({ className, children }: AnalysisCardLegendItemProps) {
  return <div className={cn(className, styles.container)}>{children}</div>;
}

AnalysisLegendItem.Title = AnalysisLegendTitle;
AnalysisLegendItem.TitleBase = AnalysisLegendTitleBase;
AnalysisLegendItem.ValueNumber = LegendNumberValue;
AnalysisLegendItem.ValueBase = LegendValueBase;
