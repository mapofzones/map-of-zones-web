import { ReactNode } from 'react';

import { SkeletonRectangle } from 'ui';

import styles from './SwapWidgetSkeleton.module.scss';

export function SwapWidgetSkeleton({ children }: { children?: ReactNode }) {
  return <SkeletonRectangle className={styles.container}>{children}</SkeletonRectangle>;
}
