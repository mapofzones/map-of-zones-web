import cn from 'classnames';

import styles from './Circle.module.scss';

import { CircleProps } from '.';

export function Circle({ color, className }: CircleProps) {
  return <span className={cn(className, styles.circle)} style={{ backgroundColor: color }}></span>;
}
