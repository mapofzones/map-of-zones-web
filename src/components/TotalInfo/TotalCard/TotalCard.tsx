import { ReactNode } from 'react';

import cn from 'classnames';

import styles from './TotalCard.module.scss';

export function TotalCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return <div className={cn(styles.container, className)}>{children}</div>;
}
