import { Suspense, useState } from 'react';

import cn from 'classnames';

import { ExternalLink } from 'components';
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
        <span className={styles.assistanceText}>
          If you need assistance, please read the{' '}
          <ExternalLink className={styles.link} href={ExternalLinks.squidDocs}>
            user guide
          </ExternalLink>
          , where you will find a link to our helpdesk.
        </span>
        <div className={styles.widgetContainer}>
          <Suspense fallback={<SwapWidgetSkeleton />}>
            <LazySwapWidget />
          </Suspense>
          <div
            className={cn(styles.linkContainer, styles.link)}
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
