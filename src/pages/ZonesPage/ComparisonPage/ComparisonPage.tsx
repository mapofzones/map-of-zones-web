import cn from 'classnames';

import styles from './ComparisonPage.module.scss';

import { ComparisonPageProps } from '.';

export function ComparisonPage({ className, ...props }: ComparisonPageProps): JSX.Element {
  return (
    <div className={cn(className, styles.container)} {...props}>
      Comparison
    </div>
  );
}
