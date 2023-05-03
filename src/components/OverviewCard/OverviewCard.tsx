import { ReactNode } from 'react';

import cn from 'classnames';

import { Card } from 'components/ui';

import styles from './OverviewCard.module.scss';
import { OverviewCardHeader } from './OverviewCardHeader';

export function OverviewCard({
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

OverviewCard.Header = OverviewCardHeader;
