import { ReactNode } from 'react';

import cn from 'classnames';

import { Card } from 'components/ui';

import styles from './TotalCard.module.scss';

export function TotalCard({
  children,
  className,
  loading = false,
  title,
}: {
  children: ReactNode;
  className?: string;
  loading?: boolean;
  title?: string;
}): JSX.Element {
  return (
    <>
      <Card title={title} loading={loading} className={cn(styles.container, className)}>
        {children}
      </Card>
    </>
  );
}
