import { ReactNode } from 'react';

import cn from 'classnames';

import styles from './TotalCard.module.scss';

export function TotalCard({
  children,
  className,
  hiding = false,
}: {
  children: ReactNode;
  className?: string;
  hiding?: boolean;
}): JSX.Element {
  return (
    <div className={cn(styles.container, { [styles.hiding]: hiding }, className)}>{children}</div>
  );
}
