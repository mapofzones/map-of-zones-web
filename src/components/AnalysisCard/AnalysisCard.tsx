import { ReactNode } from 'react';

import cn from 'classnames';

import { Card } from 'ui';

import styles from './AnalysisCard.module.scss';
import { AnalysisCardBody } from './Body';
import { AnalysisCardHeader } from './Header';
import { AnalysisCardTitle } from './Title';

export function AnalysisCard({
  children,
  title,
  className,
}: {
  children?: ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <Card title={title} className={cn(styles.wrapper, className)}>
      {children}
    </Card>
  );
}

AnalysisCard.Header = AnalysisCardHeader;
AnalysisCard.Title = AnalysisCardTitle;
AnalysisCard.Body = AnalysisCardBody;
