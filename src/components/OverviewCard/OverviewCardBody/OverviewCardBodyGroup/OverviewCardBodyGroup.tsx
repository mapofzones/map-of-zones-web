import cn from 'classnames';

import styles from './OverviewCardBodyGroup.module.scss';

import { OverviewCardBodyGroupProps } from '.';

export function OverviewCardBodyGroup({
  className,
  children,
  ...props
}: OverviewCardBodyGroupProps): JSX.Element {
  return (
    <div className={cn(className, styles.container)} {...props}>
      {children}
    </div>
  );
}
