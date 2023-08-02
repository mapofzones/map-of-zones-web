import React, {
  ForwardedRef,
  KeyboardEvent,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

import { ZoneLinkItemsWithSearch } from 'components';
import { KeydownHandle, ZonesGroupedListWithRef } from 'components/ZonesGroupedList';
import { useGlobalSearchItemSelectedAnalytics } from 'hooks/analytics/Multipage/useGlobalSearchItemSelectedAnalytics';
import { SelectedZoneOverviewSource } from 'hooks/analytics/ZonesPage/ZonePage/ZoneOverviewPage/useViewedZoneOverviewPageAnalytics';
import { ZoneData } from 'hooks/queries/useZonesData';
import { useFilteredZones } from 'hooks/useFilteredZones';
import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';
import { getZonesOverviewPath } from 'routing';
import { ScrollableContainer } from 'ui';
import { Modal } from 'ui/Modal/Modal';

import { ActiveItem, getDefaultActiveItem } from './ActiveItem';
import styles from './GlobalSearchModal.module.scss';
import { GlobalSearchModalProps } from './GlobalSearchModal.props';
import { useActiveItemScroll } from './hooks/useActiveItemScroll';
import { ZonesNotFoundContainer } from './ZonesNotFoundContainer';
import { GlobalSearchInput } from '../GlobalSearchInput';

export function GlobalSearchModal({ isVisible, zones, onModalClose }: GlobalSearchModalProps) {
  const [searchValue, setSearchValue] = useState('');

  const isTablet = useTabletSmallMediaQuery();

  const navigate = useNavigate();

  const onSearchChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const onModalCloseInternal = () => {
    setSearchValue('');
    // setActiveItem(getDefaultActiveItem());
    onModalClose?.();
  };

  const location = useLocation();
  useEffect(() => {
    onModalCloseInternal();
  }, [location]);

  const trackSelectedGlobalSearchItem = useGlobalSearchItemSelectedAnalytics();
  const onItemClick = (zone: string) => {
    navigate(`/${getZonesOverviewPath(zone)}`, {
      state: { source: SelectedZoneOverviewSource.GlobalSearch },
    });
    onModalCloseInternal();
    trackSelectedGlobalSearchItem(zone);
  };

  const modalContainerVariants = isTablet
    ? {
        open: { opacity: 1 },
        collapsed: { opacity: 0 },
      }
    : {
        open: { maxWidth: 620, opacity: 1 },
        collapsed: { maxWidth: 0, opacity: 0 },
      };

  const keydownHandleRef = useRef<KeydownHandle>(null);
  function handleArrowKeys(event: KeyboardEvent<HTMLDivElement>): void {
    if (keydownHandleRef.current) {
      keydownHandleRef.current.keydown(event);
    }
  }

  return (
    <Modal isOpen={isVisible} onClose={onModalCloseInternal}>
      <motion.div
        className={styles.searchContainer}
        initial="collapsed"
        animate="open"
        variants={modalContainerVariants}
        transition={{ duration: 0.3 }}
      >
        <GlobalSearchInput
          autoFocus
          showCompareSwitcher
          onSearchChange={onSearchChange}
          onCancel={onModalCloseInternal}
          onKeyDown={handleArrowKeys}
        />
        <ZonesGroupedListWithRef
          ref={keydownHandleRef}
          searchValue={searchValue}
          zones={zones}
          onItemClick={onItemClick}
        ></ZonesGroupedListWithRef>
      </motion.div>
    </Modal>
  );
}
