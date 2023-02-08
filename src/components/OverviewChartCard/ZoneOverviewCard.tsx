import { ReactNode } from 'react';

import cn from 'classnames';

import { Card } from 'components/ui';

import styles from './OverviewChartCard.module.scss';

export function ZoneOverviewCard({
  children,
  title,
  className,
}: {
  children?: ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <Card title={title} className={cn(styles.wrapper, className)}>
      {children}
    </Card>
  );
}
