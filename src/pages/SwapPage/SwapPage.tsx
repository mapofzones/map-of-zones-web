import { SquidWidget } from '@0xsquid/widget';
import cn from 'classnames';

import styles from './SwapPage.module.scss';

import { SwapPageProps } from '.';

export function SwapPage({ className, ...props }: SwapPageProps) {
  return (
    <div className={cn(styles.container, className)} {...props}>
      <div>
        <SquidWidget
          config={{
            companyName: 'MOZ',
            slippage: 1.5,
            style: {
              neutralContent: '#8f8f96',
              baseContent: '#e1e0e0',
              base100: '#33333d',
              base200: '#1c1c25',
              base300: '#15151e',
              error: '#ff4455',
              warning: '#ff9900',
              success: '#66dd55',
              primary: '#ee11cc',
              secondary: '#37394c',
              secondaryContent: '#b2bcd3',
              neutral: '#2a2a33',
              roundedBtn: '5px',
              roundedBox: '5px',
              roundedDropDown: '5px',
              displayDivider: false,
            },
            mainLogoUrl: '',
          }}
        />
      </div>
    </div>
  );
}
