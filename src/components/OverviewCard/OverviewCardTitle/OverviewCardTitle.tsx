import cn from 'classnames';

import styles from './OverviewCardTitle.module.scss';

import { OverviewCardTitleProps } from '.';

export function OverviewCardTitle({
  className,
  children,
  ...props
}: OverviewCardTitleProps): JSX.Element {
  return (
    <div className={cn(className, styles.container)} {...props}>
      {children}
    </div>
  );
}
