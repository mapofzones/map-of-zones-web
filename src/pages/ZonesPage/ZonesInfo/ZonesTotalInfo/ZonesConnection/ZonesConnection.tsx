import cn from 'classnames';

import styles from './ZonesConnection.module.scss';

export function ZonesConnection({
  circlesTypes,
  source,
  target,
}: {
  circlesTypes: Array<string>;
  source: string;
  target: string;
}): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.zoneContainer}>
        <div
          className={cn(styles.circle, {
            [styles.source]: circlesTypes[0] === 'source',
            [styles.target]: circlesTypes[0] === 'target',
            [styles.volume]: circlesTypes[0] === 'volume',
          })}
        />
        <span className={styles.title}>{source}</span>
      </div>
      <div className={styles.link} />
      <div className={styles.zoneContainer}>
        <div
          className={cn(styles.circle, {
            [styles.source]: circlesTypes[1] === 'source',
            [styles.target]: circlesTypes[1] === 'target',
            [styles.volume]: circlesTypes[1] === 'volume',
          })}
        />
        <span className={styles.title}>{target}</span>
      </div>
    </div>
  );
}
