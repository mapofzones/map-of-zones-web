import cn from 'classnames';

import styles from './Tooltip.module.scss';

import { TooltipProps } from '.';

export function Tooltip({ className, children, ...props }: TooltipProps): JSX.Element {
  return (
    <div className={cn(className, styles.container)} {...props}>
      {children}
    </div>
  );
}
