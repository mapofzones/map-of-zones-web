import cn from 'classnames';

import styles from './AnalysisCardBody.module.scss';
import { AnalysisCardBodyGroup } from './Group';

import { AnalysisCardBodyProps } from '.';

export function AnalysisCardBody({
  className,
  children,
  horizontal = false,
  ...props
}: AnalysisCardBodyProps): JSX.Element {
  return (
    <div
      className={cn(className, styles.container, { [styles.horizontal]: horizontal })}
      {...props}
    >
      {children}
    </div>
  );
}

AnalysisCardBody.Group = AnalysisCardBodyGroup;
