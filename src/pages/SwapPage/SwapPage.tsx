import { SquidWidget } from '@0xsquid/widget';
import cn from 'classnames';

import styles from './SwapPage.module.scss';

import { SwapPageProps } from '.';

export function SwapPage({ className, ...props }: SwapPageProps) {
  console.log('swap page');
  return (
    <div className={cn(styles.container, className)} {...props}>
      <SquidWidget
        config={{
          companyName: 'Some company',
          slippage: 3,
        }}
      />
    </div>
  );
}
