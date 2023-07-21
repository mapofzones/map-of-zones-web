import { ReactNode } from 'react';

import cn from 'classnames';

import styles from './AnalysisCardLegendItem.module.scss';
import { AnalysisLegendTitle } from './Title/AnalysisLegendTitle';
import { AnalysisLegendTitleBase } from './Title/AnalysisLegendTitleBase';
import { LegendNumberValue } from './Value/AnalysisLegendNumberValue';
import { LegendValueBase } from './Value/AnalysisLegendValueBase';

export interface AnalysisCardLegendItemProps {
  className?: string;
  horizontal?: boolean;
  children?: ReactNode;
  showBorder?: boolean;
}

export function AnalysisLegendItem({
  className,
  children,
  horizontal,
  showBorder = false,
}: AnalysisCardLegendItemProps) {
  return (
    <div
      className={cn(className, styles.container, {
        [styles.horizontal]: horizontal,
        [styles.withDivider]: showBorder,
      })}
    >
      {children}
    </div>
  );
}

AnalysisLegendItem.Title = AnalysisLegendTitle;
AnalysisLegendItem.TitleBase = AnalysisLegendTitleBase;
AnalysisLegendItem.ValueNumber = LegendNumberValue;
AnalysisLegendItem.ValueBase = LegendValueBase;
