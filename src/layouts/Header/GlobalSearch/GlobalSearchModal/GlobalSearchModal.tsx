import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { KeydownHandle, ZonesGroupedListWithRef } from 'components/ZonesGroupedList';
import { ZonesListModalContent } from 'components/ZonesListModalContent/ZonesListModalContent';
import { ZonesSelectorModalContainer } from 'components/ZonesSelector/ZonesSelectorContainer';
import { useGlobalSearchItemSelectedAnalytics } from 'hooks/analytics/Multipage/useGlobalSearchItemSelectedAnalytics';
import { SelectedZoneOverviewSource } from 'hooks/analytics/ZonesPage/ZonePage/ZoneOverviewPage/useViewedZoneOverviewPageAnalytics';
import { getZonesOverviewPath } from 'routing';

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

  const keydownHandleRef = useRef<KeydownHandle>(null);
  function handleArrowKeys(event: KeyboardEvent<HTMLDivElement>): void {
    if (keydownHandleRef.current) {
      keydownHandleRef.current.keydown(event);
    }
  }

  return (
    <ZonesSelectorModalContainer
      className={styles.container}
      isOpen={isVisible}
      onClose={onModalCloseInternal}
    >
      <ZonesListModalContent>
        <GlobalSearchInput
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
          onItemClick={onItemClick}
        ></ZonesGroupedListWithRef>
      </ZonesListModalContent>
    </ZonesSelectorModalContainer>
  );
}
