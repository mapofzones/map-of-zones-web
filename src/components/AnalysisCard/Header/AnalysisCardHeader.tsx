import cn from 'classnames';

import styles from './AnalysisCardHeader.module.scss';

import { AnalysisCardHeaderProps } from '.';

export function AnalysisCardHeader({
  className,
  children,
  ...props
}: AnalysisCardHeaderProps): JSX.Element {
  return (
    <div className={cn(className, styles.container)} {...props}>
      {children}
    </div>
  );
}
