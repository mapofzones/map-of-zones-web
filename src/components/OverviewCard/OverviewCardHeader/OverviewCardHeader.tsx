import cn from 'classnames';

import styles from './OverviewCardHeader.module.scss';

import { OverviewCardHeaderProps } from '.';

export function OverviewCardHeader({
  className,
  children,
  ...props
}: OverviewCardHeaderProps): JSX.Element {
  return (
    <div className={cn(className, styles.container)} {...props}>
      {children}
    </div>
  );
}
