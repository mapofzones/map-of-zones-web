import styles from './Circle.module.scss';

import { CircleProps } from '.';

export function Circle({ color }: CircleProps) {
  return <span className={styles.circle} style={{ backgroundColor: color }}></span>;
}
