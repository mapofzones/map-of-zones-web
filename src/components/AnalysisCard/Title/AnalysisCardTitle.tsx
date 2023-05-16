import cn from 'classnames';

import styles from './AnalysisCardTitle.module.scss';

import { AnalysisCardTitleProps } from '.';

export function AnalysisCardTitle({
  className,
  children,
  ...props
}: AnalysisCardTitleProps): JSX.Element {
  return (
    <div className={cn(className, styles.container)} {...props}>
      {children}
    </div>
  );
}
