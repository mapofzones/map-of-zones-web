import { useEffect, useMemo, useState } from 'react';

import cn from 'classnames';

import { ZoneInfoWithSearch } from 'components';
import { useFilteredZones } from 'hooks/useFilteredZones';
import { ScrollableContainer, Search } from 'ui';
import { Modal } from 'ui/Modal/Modal';

import styles from './ZonesSelectorModal.module.scss';
import { ZonesSearchProps } from './ZonesSelectorModal.props';

export function ZonesSelectorModal({
  currentZone,
  zonesList,
  modalPosition,
  isOpen,
  onClose,
  onZoneSelected,
  offset,
}: ZonesSearchProps): JSX.Element {
  const [searchValue, setSearchValue] = useState('');

  const filteredZones = useFilteredZones(zonesList, searchValue);

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = 'var(--scrollbar-width)';

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.marginRight = '';
    };
  }, []);

  const style = useMemo(() => {
    if (!offset) {
      return;
    }
    if (modalPosition === 'right') {
      return {
        right: window.innerWidth - offset.right,
        top: offset.top + offset.height,
      };
    }
    return { left: offset.left, top: offset.top + offset.height };
  }, [modalPosition, offset]);

  return (
    <Modal className={cn(styles.container)} style={style} isOpen={isOpen} onClose={onClose}>
      <Search
        autoFocus={true}
        className={styles.searchContainer}
        onSearchChange={onSearchChange}
        placeholder={zonesList.length + ' Zones'}
      />

      <ScrollableContainer className={styles.itemsContainer}>
        {!!searchValue && !filteredZones?.length && (
          <div className={styles.zonesNotFoundContainer}>No zones found.</div>
        )}

        {filteredZones.map((zone) => (
          <div
            className={cn(styles.zone, { [styles.activeZone]: currentZone === zone.zone })}
            key={`zone_${zone.zone}`}
            onClick={() => onZoneSelected(zone.zone)}
          >
            <ZoneInfoWithSearch searchValue={searchValue} zone={zone} />
          </div>
        ))}
      </ScrollableContainer>
    </Modal>
  );
}
