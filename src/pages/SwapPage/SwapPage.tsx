import { Suspense, useState } from 'react';

import { LazySwapWidget } from 'lazyModules/exports';

import styles from './SwapPage.module.scss';
import { SwapWidgetSkeleton } from './SwapWidgetSkeleton';
import { TermOfUseModal } from './TermOfUseModal';

export default function SwapPage() {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.widgetContainer}>
          <Suspense fallback={<SwapWidgetSkeleton />}>
            <LazySwapWidget />
          </Suspense>
          <div className={styles.linkContainer} onClick={() => setIsModalOpened(true)}>
            Terms of Use
          </div>
        </div>
      </div>
      <TermOfUseModal isOpen={isModalOpened} onClosed={() => setIsModalOpened(false)} />
    </>
  );
}
