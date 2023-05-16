import cn from 'classnames';

import styles from './AnalysisCardBodyGroup.module.scss';

import { AnalysisCardBodyGroupProps } from '.';

export function AnalysisCardBodyGroup({
  className,
  children,
  ...props
}: AnalysisCardBodyGroupProps): JSX.Element {
  return (
    <div className={cn(className, styles.container)} {...props}>
      {children}
    </div>
  );
}
