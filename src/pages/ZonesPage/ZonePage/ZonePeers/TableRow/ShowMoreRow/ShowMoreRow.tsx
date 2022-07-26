import cn from 'classnames';

import { TableRowItem } from 'components';
import { ArrowDown } from 'icons';

import styles from './ShowMoreRow.module.scss';
import { ShowMoreRowProps } from './ShowMoreRow.props';

export function ShowMoreRow({ count, showMoreChannels }: ShowMoreRowProps) {
  return (
    <tr className={cn(styles.container, { [styles.emptyContainer]: !count })}>
      {count ? (
        <TableRowItem isSticky={true}>
          <div className={styles.arrowContainer}>
            <div className={styles.position}>...</div>
          </div>

          <div className={styles.title} onClick={showMoreChannels}>
            Show {count} more
            <ArrowDown className={styles.arrowIcon} />
          </div>
        </TableRowItem>
      ) : (
        <td className={cn(styles.columnContainer, styles.sticky)} />
      )}
      <TableRowItem withBorder={true} />
      <TableRowItem />
      <TableRowItem withBorder={true} />
      <TableRowItem />
      <TableRowItem />
      <TableRowItem withBorder={true} />
      <TableRowItem />
    </tr>
  );
}
