import { SquidWidget } from '@0xsquid/widget';
import cn from 'classnames';

import styles from './SwapPage.module.scss';

import { SwapPageProps } from '.';

export function SwapPage({ className, ...props }: SwapPageProps) {
  return (
    <div className={cn(styles.container, className)} {...props}>
      <SquidWidget />
    </div>
  );
}
