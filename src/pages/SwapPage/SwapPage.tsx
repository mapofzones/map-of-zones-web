import { Suspense, useState } from 'react';

import cn from 'classnames';

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
        <div className={styles.title}>In Partnership with Squid</div>
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
            <ExternalLink className={styles.link} href={ExternalLinks.squidDocs}>
              user guide
            </ExternalLink>
            , where you will find a link to Squid’s helpdesk.
          </div>
          <div
            className={cn(styles.termsOfUse, styles.link)}
            onClick={() => setIsModalOpened(true)}
          >
            Terms of Use
          </div>
        </div>
      </div>
      <TermOfUseModal isOpen={isModalOpened} onClosed={() => setIsModalOpened(false)} />
    </>
  );
}
