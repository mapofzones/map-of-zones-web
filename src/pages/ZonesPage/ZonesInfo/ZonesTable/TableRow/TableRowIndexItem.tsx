import { AnimatePresence, Variants, motion } from 'framer-motion';

import { TableRowItem } from 'components';
import { Checkbox } from 'components/Checkbox';

import styles from './TableRow.module.scss';
import { useTableMetadata } from '../ZonesTableMetadataProvider';

const animationVariants: Variants = {
  hidden: { opacity: 0, translateX: -10 },
  shown: { opacity: 1, translateX: 0 },
};

const animationProps = {
  initial: 'hidden',
  animate: 'shown',
  exit: 'hidden',
  variants: animationVariants,
};

export function TableRowIndexItem({
  isTableHorizontalScrollable,
  index,
  zoneKey,
}: {
  isTableHorizontalScrollable: boolean | undefined;
  index: number;
  zoneKey: string;
}) {
  const { isComparisonMode, isCheckedFunc, onCheckedChange } = useTableMetadata();

  return (
    <TableRowItem isSticky={isTableHorizontalScrollable}>
      <AnimatePresence exitBeforeEnter>
        {isComparisonMode && (
          <motion.div key="checkboxWrapper" {...animationProps}>
            <Checkbox
              checked={isCheckedFunc?.(zoneKey) ?? false}
              onCheckedChange={(checked) => onCheckedChange?.(zoneKey, checked)}
              disabled={false}
            />
          </motion.div>
        )}
        {!isComparisonMode && (
          <motion.div key="indexWrapper" className={styles.position} {...animationProps}>
            {index + 1}
          </motion.div>
        )}
      </AnimatePresence>
    </TableRowItem>
  );
}
