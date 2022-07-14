import cn from 'classnames';

import styles from './SkeletonElementWrapper.module.scss';

export function SkeletonElementWrapper({ children, className, ...props }: any) {
  return (
    <div className={cn(styles.container, className)} {...props}>
      {children}
    </div>
  );
}
