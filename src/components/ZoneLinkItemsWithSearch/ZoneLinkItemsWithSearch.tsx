import { useCallback } from 'react';

import cn from 'classnames';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import { ZoneInfoWithSearch } from 'components';
import { Checkbox } from 'components/Checkbox';
import { useAppSelector } from 'store/hooks';
import { useZonesPageComparisonModeActionsCreator } from 'store/ZonesPageComparisonMode.slice';

import styles from './ZoneLinkItemsWithSearch.module.scss';

import { ZoneLinkItemsWithSearchProps } from '.';

const checkboxAnimationVariants = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: 'auto' },
};

const itemAnimationVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24, duration: 1 },
  },
  hidden: { opacity: 0, y: -100, transition: { duration: 0.6 } },
};

const itemAnimationProps = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  variants: itemAnimationVariants,
};

export function ZoneLinkItemsWithSearch({
  title,
  zones,
  searchValue,
  selectedIndex,
  activeItemRef,
  onItemClick,
}: ZoneLinkItemsWithSearchProps) {
  const { isComparison, zones: selectedZones } = useAppSelector(
    (state) => state.zonesPageComparisonMode
  );

  const { addZoneToCompare, removeZoneFromCompare } = useZonesPageComparisonModeActionsCreator();

  const isCheckedFunc = useCallback(
    (zoneKey: string) => selectedZones.includes(zoneKey),
    [selectedZones]
  );

  const onCheckedChange = useCallback(
    (zoneKey: string, checked: boolean) => {
      if (checked) {
        addZoneToCompare(zoneKey);
      } else {
        removeZoneFromCompare(zoneKey);
      }
    },
    [addZoneToCompare, removeZoneFromCompare]
  );

  if (!zones?.length) {
    return <></>;
  }

  return (
    <>
      {title && (
        <motion.div className={styles.groupTitle} {...itemAnimationProps}>
          {title}
        </motion.div>
      )}

      {zones.map((zone, index) => (
        <motion.div
          ref={index === selectedIndex ? activeItemRef : null}
          className={cn(styles.zone, { [styles.activeZone]: index === selectedIndex })}
          key={`zone_${zone.zone}`}
          onClick={() => onItemClick?.(zone.zone)}
          layout
          {...itemAnimationProps}
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
                  checked={isCheckedFunc?.(zone.zone) ?? false}
                  onCheckedChange={(checked) => onCheckedChange?.(zone.zone, checked)}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <ZoneInfoWithSearch className={styles.content} searchValue={searchValue} zone={zone} />
        </motion.div>
      ))}
    </>
  );
}
