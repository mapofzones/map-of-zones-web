import { useState } from 'react';

import { SquidWidget } from '@0xsquid/widget';
import cn from 'classnames';

import styles from './SwapPage.module.scss';
import { TermOfUseModal } from './TermOfUseModal';

import { SwapPageProps } from '.';

const ETHEREUM_CHAIN_ID = 1;
const OSMOSIS_CHAIN_ID = 'osmosis-1';

export default function SwapPage({ className, ...props }: SwapPageProps) {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  return (
    <>
      <div className={cn(styles.container, className)} {...props}>
        <div className={styles.widgetContainer}>
          <SquidWidget
            config={{
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
                roundedBox: '5px 5px 0 0',
                roundedDropDown: '5px',
                displayDivider: false,
              },
              mainLogoUrl: '',
              initialFromChainId: ETHEREUM_CHAIN_ID,
              initialToChainId: OSMOSIS_CHAIN_ID as any,
              defaultTokens: [
                {
                  address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // Token address for USDC
                  chainId: ETHEREUM_CHAIN_ID, // Chain ID for Ethereum
                },
                {
                  address: 'uusdc', // Token address for axlUsdc
                  chainId: OSMOSIS_CHAIN_ID, // Chain ID for Osmosis
                },
              ],
            }}
          />
          <div className={styles.linkContainer} onClick={() => setIsModalOpened(true)}>
            Term of Use
          </div>
        </div>
      </div>

      <TermOfUseModal isOpen={isModalOpened} onClosed={() => setIsModalOpened(false)} />
    </>
  );
}
