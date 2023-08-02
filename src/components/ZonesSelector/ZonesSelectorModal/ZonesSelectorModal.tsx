import { useEffect, useMemo, useRef, useState, KeyboardEvent } from 'react';

import cn from 'classnames';

import { KeydownHandle, ZonesGroupedListWithRef } from 'components/ZonesGroupedList';
import { Search } from 'ui';
import { Modal } from 'ui/Modal/Modal';

import styles from './ZonesSelectorModal.module.scss';
import { ZonesSearchProps } from './ZonesSelectorModal.props';

export function ZonesSelectorModal({
  zonesList,
  modalPosition,
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

  const keydownHandleRef = useRef<KeydownHandle>(null);
  function handleArrowKeys(event: KeyboardEvent<HTMLDivElement>): void {
    if (keydownHandleRef.current) {
      keydownHandleRef.current.keydown(event);
    }
  }

  return (
    <Modal className={cn(styles.container)} style={style} isOpen={isOpen} onClose={onClose}>
      <Search
        autoFocus={true}
        className={styles.searchContainer}
        onSearchChange={onSearchChange}
        placeholder={zonesList.length + ' Zones'}
        onKeyDown={handleArrowKeys}
      />

      <ZonesGroupedListWithRef
        ref={keydownHandleRef}
        searchValue={searchValue}
        zones={zonesList}
        onItemClick={onItemClick}
      />
    </Modal>
  );
}
