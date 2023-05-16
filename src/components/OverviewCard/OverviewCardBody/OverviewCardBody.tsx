import cn from 'classnames';

import styles from './OverviewCardBody.module.scss';
import { OverviewCardBodyGroup } from './OverviewCardBodyGroup';

import { OverviewCardBodyProps } from '.';

export function OverviewCardBody({
  className,
  children,
  ...props
}: OverviewCardBodyProps): JSX.Element {
  return (
    <div className={cn(className, styles.container)} {...props}>
      {children}
    </div>
  );
}

OverviewCardBody.Group = OverviewCardBodyGroup;
