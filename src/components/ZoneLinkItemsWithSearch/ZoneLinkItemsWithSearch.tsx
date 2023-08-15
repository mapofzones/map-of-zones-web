import cn from 'classnames';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { ZoneInfoWithSearch } from 'components';
import { Checkbox } from 'components/Checkbox';
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
  activeItemRef: any;
  zone: ZoneData;
  searchValue?: string;
  onItemClick?: (zoneKey: string) => void;
}

function ZoneLinkItem({ activeItemRef, zone, searchValue, onItemClick }: ZoneLinkItemProps) {
  const navigate = useNavigate();

  const isComparison = useAppSelector((state) => state.zonesPageComparisonMode.isComparison);

  const checked = useAppSelector((state) => isZoneCheckedSelector(state, zone.zone));

  const disabled = useAppSelector((state) => isZoneDisabledToCompareSelector(state, zone.zone));

  const { toggleZone } = useZonesPageComparisonModeActionsCreator();

  const onClick = () => {
    if (onItemClick) {
      onItemClick(zone.zone);
      return;
    }

    if (isComparison) {
      toggleZone({ checked: !checked, zone: zone.zone });
    } else {
      navigate(`${zone.zone}/${overviewPath}`);
    }
  };

  return (
    <motion.div
      ref={activeItemRef}
      className={cn(styles.zone, {
        [styles.activeZone]: !!activeItemRef,
      })}
      onClick={onClick}
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
              checked={checked}
              disabled={disabled}
              onCheckedChange={(checked) => toggleZone({ zone: zone.zone, check: checked })}
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
  zones,
  searchValue,
  selectedIndex,
  activeItemRef,
  onItemClick,
}: ZoneLinkItemsWithSearchProps) {
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
        <ZoneLinkItem
          key={`zone_${zone.zone}`}
          searchValue={searchValue}
          activeItemRef={index === selectedIndex ? activeItemRef : null}
          zone={zone}
          onItemClick={onItemClick}
        />
      ))}
    </>
  );
}
