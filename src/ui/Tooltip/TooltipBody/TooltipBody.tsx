import cn from 'classnames';

import styles from './TooltipBody.module.scss';
import { TooltipBodyProps } from './TooltipBody.props';

export function TooltipBody({
  children,
  className,
  isFixed = true,
  innerRef,
  ...props
}: TooltipBodyProps) {
  return (
    <div
      ref={innerRef}
      className={cn(styles.container, className, {
        [styles.fixed]: isFixed,
      })}
      {...props}
    >
      {children}
    </div>
  );
}
