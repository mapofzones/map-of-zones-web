import { useMemo, useRef, useState, KeyboardEvent } from 'react';

import cn from 'classnames';

import { KeydownHandle, ZonesGroupedListWithRef } from 'components/ZonesGroupedList';
import { ZonesListModalContent } from 'components/ZonesListModalContent/ZonesListModalContent';
import { useTabletMediumMediaQuery } from 'hooks/useMediaQuery';
import { Search } from 'ui';

import styles from './ZonesSelectorModal.module.scss';
import { ZonesSearchProps } from './ZonesSelectorModal.props';
import { ZonesSelectorModalContainer } from '../ZonesSelectorContainer';

const maxModalWidthPx = 360;

export function ZonesSelectorModal({
  zonesList,
  isOpen,
  onClose,
  onZoneSelected,
  offset,
}: ZonesSearchProps): JSX.Element {
  const [searchValue, setSearchValue] = useState('');

  const onItemClick = (zone: string) => {
    onZoneSelected(zone);
  };

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const isTableMedium = useTabletMediumMediaQuery();

  const style = useMemo(() => {
    if (isTableMedium || !offset) {
      return;
    }

    const isRightPartOfWindow = window.innerWidth / 2 < offset.left;
    if (isRightPartOfWindow) {
      const right = window.innerWidth - offset.right;
      return {
        right,
        left: offset.right - maxModalWidthPx,
        top: offset.top + offset.height,
      };
    }
    return {
      left: offset.left,
      right: window.innerWidth - (offset.left + maxModalWidthPx),
      top: offset.top + offset.height,
    };
  }, [isTableMedium, offset]);

  const keydownHandleRef = useRef<KeydownHandle>(null);
  function handleArrowKeys(event: KeyboardEvent<HTMLDivElement>): void {
    if (keydownHandleRef.current) {
      keydownHandleRef.current.keydown(event);
    }
  }
  return (
    <ZonesSelectorModalContainer
      className={cn(styles.container)}
      style={style}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ZonesListModalContent>
        <Search
          autoFocus={true}
          className={styles.searchContainer}
          onSearchChange={onSearchChange}
          placeholder={zonesList.length + ' Zones'}
          onKeyDown={handleArrowKeys}
        />

        <ZonesGroupedListWithRef
          ref={keydownHandleRef}
          className={styles.itemsContainer}
          searchValue={searchValue}
          zones={zonesList}
          onItemClick={onItemClick}
        />
      </ZonesListModalContent>
    </ZonesSelectorModalContainer>
  );
}
