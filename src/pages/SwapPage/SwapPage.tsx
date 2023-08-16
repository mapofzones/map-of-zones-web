import { Suspense, useState } from 'react';

import { ExternalLink } from 'components';
import { DefaultErrorFallback } from 'ErrorBoundary';
import { ErrorBoundary } from 'ErrorBoundary/ErrorBoundary';
import { LazySwapWidget } from 'lazyModules';
import { ExternalLinks } from 'types/external-links';

import styles from './SwapPage.module.scss';
import { SwapWidgetSkeleton } from './SwapWidgetSkeleton';
import { TermOfUseModal } from './TermOfUseModal';

export default function SwapPage() {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>In Partnership with Squid x Axelar</div>
        <div className={styles.widgetContainer}>
          <ErrorBoundary fallback={<DefaultErrorFallback />}>
            <Suspense fallback={<SwapWidgetSkeleton />}>
              <LazySwapWidget />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.assistanceText}>
            If you need assistance, please read the{' '}
            <ExternalLink underlined href={ExternalLinks.squidDocs}>
              user guide
            </ExternalLink>
            , where you will find a link to Squid’s helpdesk.
          </div>
          <ExternalLink underlined onClick={() => setIsModalOpened(true)}>
            Terms of Use
          </ExternalLink>
        </div>
      </div>
      <TermOfUseModal isOpen={isModalOpened} onClosed={() => setIsModalOpened(false)} />
    </>
  );
}
