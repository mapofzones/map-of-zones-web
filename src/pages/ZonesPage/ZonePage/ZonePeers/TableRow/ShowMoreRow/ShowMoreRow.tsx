import cn from 'classnames';
import { motion } from 'framer-motion';

import { ArrowDown } from 'assets/icons';
import { TableRowItem } from 'components';

import styles from './ShowMoreRow.module.scss';
import { ShowMoreRowProps } from './ShowMoreRow.props';

export function ShowMoreRow({
  count,
  isTableHorizontalScrollable,
  showMoreChannels,
}: ShowMoreRowProps) {
  return (
    <motion.tr
      className={cn(styles.container, { [styles.emptyContainer]: !count })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TableRowItem isSticky={true} withBorder={isTableHorizontalScrollable}>
        {!!count && (
          <>
            <div className={styles.arrowContainer}>
              <div className={styles.position}>...</div>
            </div>

            <div className={styles.title} onClick={showMoreChannels}>
              Show {count} more
              <ArrowDown className={styles.arrowIcon} />
            </div>
          </>
        )}
      </TableRowItem>
      <TableRowItem withBorder={true} />
      <TableRowItem />
      <TableRowItem withBorder={true} />
      <TableRowItem />
      <TableRowItem />
      <TableRowItem withBorder={true} />
      <TableRowItem />
    </motion.tr>
  );
}
