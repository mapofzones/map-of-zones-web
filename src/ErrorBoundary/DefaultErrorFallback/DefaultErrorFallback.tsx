import cn from 'classnames';

import styles from './DefaultErrorFallback.module.scss';

export function DefaultErrorFallback({ className }: { className?: string }) {
  return (
    <div className={cn(className, styles.container)}>
      Something went wrong. Try reload the page.
    </div>
  );
}
