import cn from 'classnames';

import styles from './PointerAreaWrapper.module.scss';
import { PointerAreaWrapperProps } from './PointerAreaWrapper.props';

export function PointerAreaWrapper({
  className,
  children,
  areaScale = 1.25,
  circle = false,
  ...props
}: PointerAreaWrapperProps) {
  return (
    <div
      style={{ scale: `${areaScale}` }}
      className={cn(
        styles.wrapper,
        {
          [styles.circle]: circle,
        },
        className
      )}
      {...props}
    >
      <div style={{ scale: `${1 / areaScale}` }}>{children}</div>
    </div>
  );
}
