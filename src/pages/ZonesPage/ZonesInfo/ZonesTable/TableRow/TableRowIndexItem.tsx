import { AnimatePresence, Variants, motion } from 'framer-motion';

import { TableRowItem } from 'components';
import { Checkbox } from 'components/Checkbox';
import { useAppSelector } from 'store/hooks';
import {
  isZoneDisabledToCompareSelector,
  isZoneCheckedSelector,
  useZonesPageComparisonModeActionsCreator,
} from 'store/ZonesPageComparisonMode.slice';

import styles from './TableRow.module.scss';

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
  const isComparison = useAppSelector((state) => state.zonesPageComparisonMode.isComparison);

  const isChecked = useAppSelector((state) => isZoneCheckedSelector(state, zoneKey));

  const disabled = useAppSelector((state) => isZoneDisabledToCompareSelector(state, zoneKey));

  const { toggleZone } = useZonesPageComparisonModeActionsCreator();

  return (
    <TableRowItem isSticky={isTableHorizontalScrollable}>
      <AnimatePresence exitBeforeEnter>
        {isComparison && (
          <motion.div key="checkboxWrapper" {...animationProps}>
            <Checkbox
              checked={isChecked}
              disabled={disabled}
              onCheckedChange={(checked) => toggleZone({ zone: zoneKey, checked })}
            />
          </motion.div>
        )}
        {!isComparison && (
          <motion.div key="indexWrapper" className={styles.position} {...animationProps}>
            {index + 1}
          </motion.div>
        )}
      </AnimatePresence>
    </TableRowItem>
  );
}
