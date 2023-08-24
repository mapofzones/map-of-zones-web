import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { KeydownHandle, ZonesGroupedListWithRef } from 'components/ZonesGroupedList';
import { ZoneLinkItemWithComparison } from 'components/ZonesGroupedList/ZoneLinkItemWithComparison';
import { ZonesListModalContent } from 'components/ZonesListModalContent/ZonesListModalContent';
import { ZonesSelectorModalContainer } from 'components/ZonesSelector/ZonesSelectorContainer';
import { useGlobalSearchItemSelectedAnalytics } from 'hooks/analytics/Multipage/useGlobalSearchItemSelectedAnalytics';
import { SelectedZoneOverviewSource } from 'hooks/analytics/ZonesPage/ZonePage/ZoneOverviewPage/useViewedZoneOverviewPageAnalytics';
import { ZoneData } from 'hooks/queries/useZonesData';
import { getZonesOverviewPath } from 'routing';
import { useAppSelector } from 'store/hooks';
import { useZonesPageComparisonModeActionsCreator } from 'store/ZonesPageComparisonMode.slice';

import styles from './GlobalSearchModal.module.scss';
import { GlobalSearchModalProps } from './GlobalSearchModal.props';
import { GlobalSearchInput } from '../GlobalSearchInput';

export function GlobalSearchModal({ isVisible, zones, onModalClose }: GlobalSearchModalProps) {
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const onSearchChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const onModalCloseInternal = () => {
    setSearchValue('');
    onModalClose?.();
  };

  const location = useLocation();
  useEffect(() => {
    onModalCloseInternal();
  }, [location]);

  const { toggleZone } = useZonesPageComparisonModeActionsCreator();

  const trackSelectedGlobalSearchItem = useGlobalSearchItemSelectedAnalytics();
  const onItemClick = (zone: string) => {
    if (isComparison) {
      toggleZone({ zone: zone });
    } else {
      navigate(`/${getZonesOverviewPath(zone)}`, {
        state: { source: SelectedZoneOverviewSource.GlobalSearch },
      });
      trackSelectedGlobalSearchItem(zone);
      onModalCloseInternal();
    }
  };

  const keydownHandleRef = useRef<KeydownHandle>(null);
  function handleArrowKeys(event: KeyboardEvent<HTMLDivElement>): void {
    if (keydownHandleRef.current) {
      keydownHandleRef.current.keydown(event);
    }
  }

  const isComparison = useAppSelector((state) => state.zonesPageComparisonMode.isComparison);
  const selectedZonesToCompare = useAppSelector((state) => state.zonesPageComparisonMode.zones);

  const isItemCheckedFunc = (zoneKey: string) => selectedZonesToCompare.includes(zoneKey);
  const isItemDisabledFunc = (zoneKey: string) =>
    selectedZonesToCompare.length >= 3 && !isItemCheckedFunc(zoneKey);

  const onItemCheck = (zoneKey: string, check: boolean) => {
    toggleZone({ zone: zoneKey, check: check });
  };

  return (
    <ZonesSelectorModalContainer
      className={styles.container}
      isOpen={isVisible}
      onClose={onModalCloseInternal}
    >
      <ZonesListModalContent>
        <GlobalSearchInput
          className={styles.searchInput}
          autoFocus
          showCompareSwitcher
          onSearchChange={onSearchChange}
          onCancel={onModalCloseInternal}
          onKeyDown={handleArrowKeys}
        />

        <ZonesGroupedListWithRef
          ref={keydownHandleRef}
          className={styles.itemsContainer}
          searchValue={searchValue}
          zones={zones}
          onItemSelected={onItemClick}
        >
          {(zone: ZoneData, isActive: boolean) => (
            <ZoneLinkItemWithComparison
              key={zone.zone}
              zone={zone}
              searchValue={searchValue}
              isActive={isActive}
              isComparison={isComparison}
              onItemClick={onItemClick}
              onItemCheck={onItemCheck}
              isItemCheckedFunc={isItemCheckedFunc}
              isItemDisabledFunc={isItemDisabledFunc}
            />
          )}
        </ZonesGroupedListWithRef>
      </ZonesListModalContent>
    </ZonesSelectorModalContainer>
  );
}
