import cn from 'classnames';

import styles from './MapLegend.module.scss';

export function MapLegend() {
  return (
    <div className={styles.legend}>
      <span className={cn(styles.circle, styles.sendCircle)}></span>Mainly Sends, $
      <span className={cn(styles.circle, styles.receiveCircle)}></span>Mainly Receives, $
    </div>
  );
}
