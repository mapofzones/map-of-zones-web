import cn from 'classnames';

import { ArrowDown } from 'icons';

import styles from './ShowMoreRow.module.scss';
import { ShowMoreRowProps } from './ShowMoreRow.props';

export function ShowMoreRow({ count, showMoreChannels }: ShowMoreRowProps) {
  return (
    <tr className={cn(styles.container, { [styles.emptyContainer]: !count })}>
      {count ? (
        <td className={styles.columnContainer}>
          <div className={styles.arrowContainer}>
            <div className={styles.position}>...</div>
          </div>

          <div className={styles.title} onClick={showMoreChannels}>
            Show {count} more
            <ArrowDown className={styles.arrowIcon} />
          </div>
        </td>
      ) : (
        <td className={styles.columnContainer} />
      )}
      <td className={styles.columnContainer} />
      <td className={cn(styles.columnContainer, styles.withBorder)} />
      <td className={styles.columnContainer} />
      <td className={cn(styles.columnContainer, styles.withBorder)} />
      <td className={styles.columnContainer} />
      <td className={styles.columnContainer} />
      <td className={cn(styles.columnContainer, styles.withBorder)} />
    </tr>
  );
}
