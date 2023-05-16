import cn from 'classnames';

import styles from './LegendValueBase.module.scss';

interface LegendValueBaseProps {
  children?: React.ReactNode;
  className?: string;
  size?: LegendVelueSize;
}

export type LegendVelueSize = 'sm' | 'md' | 'lg';

export function LegendValueBase({ children, className, size = 'md' }: LegendValueBaseProps) {
  return <span className={cn(className, styles[size])}>{children}</span>;
}
