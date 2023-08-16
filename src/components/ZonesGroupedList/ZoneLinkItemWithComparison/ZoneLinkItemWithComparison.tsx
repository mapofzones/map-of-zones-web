import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import { Checkbox } from 'components/Checkbox';
import { ZoneInfoWithSearch } from 'components/ZoneInfoWithSearch/ZoneInfoWithSearch';

import styles from './ZoneLinkItemWithComparison.module.scss';
import { ZoneLinkItemContainer } from '../ZoneLinkItemContainer';

import { ZoneLinkItemWithComparisonProps } from '.';

const checkboxAnimationVariants = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: 'auto' },
};

export function ZoneLinkItemWithComparison({
  zone,
  className,
  searchValue,
  isActive,
  isComparison,
  onItemClick,
  isItemCheckedFunc,
  isItemDisabledFunc,
  onItemCheck,
}: ZoneLinkItemWithComparisonProps) {
  return (
    <ZoneLinkItemContainer
      className={cn(styles.container, className)}
      zoneKey={zone.zone}
      isActive={isActive}
      onItemClick={onItemClick}
    >
      <AnimatePresence>
        {isComparison && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={checkboxAnimationVariants}
          >
            <Checkbox
              className={styles.checkbox}
              checked={isItemCheckedFunc?.(zone.zone) ?? false}
              disabled={isItemDisabledFunc?.(zone.zone) ?? false}
              onCheckedChange={(checked) => onItemCheck?.(zone.zone, checked)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <ZoneInfoWithSearch className={styles.content} searchValue={searchValue} zone={zone} />
    </ZoneLinkItemContainer>
  );
}
