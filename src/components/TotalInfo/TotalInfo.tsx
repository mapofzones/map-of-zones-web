import { ReactNode } from 'react';

import cn from 'classnames';

import styles from './TotalInfo.module.scss';

export function TotalInfo({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}): JSX.Element {
  return <div className={cn(styles.container, className)}>{children}</div>;
}
