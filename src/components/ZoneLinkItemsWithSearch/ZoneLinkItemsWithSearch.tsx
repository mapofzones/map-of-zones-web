import { useEffect, useRef } from 'react';

import cn from 'classnames';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { ZoneInfoWithSearch } from 'components';
import { Checkbox } from 'components/Checkbox';
import { useSelectableItemContext } from 'components/ZonesSelector/ZonesSelectorModal/ZonesSelectorModal';
import { ZoneData } from 'hooks/queries/useZonesData';
import { overviewPath } from 'routing';
import { useAppSelector } from 'store/hooks';
import {
  isZoneCheckedSelector,
  isZoneDisabledToCompareSelector,
  useZonesPageComparisonModeActionsCreator,
} from 'store/ZonesPageComparisonMode.slice';

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

export interface ZoneLinkItemProps {
  // activeItemRef: any;
  zone: ZoneData;
  isActive?: boolean;
  searchValue?: string;
}

interface SelectableItemProps {
  isComparison?: boolean;
  onItemClick?: (zoneKey: string) => void;
  isItemCheckedFunc?: (zoneKey: string) => boolean;
  isItemDisabledFunc?: (zoneKey: string) => boolean;
  onItemCheck?: (zoneKey: string, check: boolean) => void;
}

export function ZoneLinkItem({
  zone,
  searchValue,
  isActive,
  isComparison,
  onItemClick,
  isItemCheckedFunc,
  isItemDisabledFunc,
  onItemCheck,
}: ZoneLinkItemProps & SelectableItemProps) {
  // const navigate = useNavigate();

  // const isComparison = useAppSelector((state) => state.zonesPageComparisonMode.isComparison);

  // const checked = useAppSelector((state) => isZoneCheckedSelector(state, zone.zone));

  // const disabled = useAppSelector((state) => isZoneDisabledToCompareSelector(state, zone.zone));

  // const { toggleZone } = useZonesPageComparisonModeActionsCreator();

  // const onClick = () => {
  //   if (onItemClick) {
  //     onItemClick(zone.zone);
  //     return;
  //   }

  //   if (isComparison) {
  //     toggleZone({ checked: !checked, zone: zone.zone });
  //   } else {
  //     navigate(`${zone.zone}/${overviewPath}`);
  //   }
  // };

  // const { onItemClick, onItemCheck, isItemCheckedFunc, isItemDisabledFunc } =
  //   useSelectableItemContext();

  // console.log('ZoneLinkItem actimeIteRef children: ', activeItemRef);

  const activeItemRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!activeItemRef.current || !isActive) return;

    activeItemRef.current.scrollIntoView({
      block: 'center',
    });
  }, [isActive]);

  return (
    <motion.div
      ref={activeItemRef}
      className={cn(styles.zone, {
        [styles.activeZone]: isActive,
      })}
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
              checked={isItemCheckedFunc?.(zone.zone) ?? false}
              disabled={isItemDisabledFunc?.(zone.zone) ?? false}
              onCheckedChange={(checked) => onItemCheck?.(zone.zone, checked)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <ZoneInfoWithSearch className={styles.content} searchValue={searchValue} zone={zone} />
    </motion.div>
  );
}

export function ZoneLinkItemsWithSearch({
  title,
  children,
}: // searchValue,
// selectedIndex,
// activeItemRef,
ZoneLinkItemsWithSearchProps) {
  return (
    <>
      {title && (
        <motion.div className={styles.groupTitle} {...itemAnimationProps}>
          {title}
        </motion.div>
      )}

      {children}

      {/* {zones.map((zone, index) => (
        <ZoneLinkItem
          key={`zone_${zone.zone}`}
          searchValue={searchValue}
          activeItemRef={index === selectedIndex ? activeItemRef : null}
          zone={zone}
        />
      ))} */}
    </>
  );
}
