import { ReactNode } from 'react';

import { SkeletonRectangle } from 'components';

import styles from './SwapWidgetSkeleton.module.scss';

export function SwapWidgetSkeleton({ children }: { children?: ReactNode }) {
  return <SkeletonRectangle className={styles.container}>{children}</SkeletonRectangle>;
}
