import { useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import { useLocation } from 'react-router-dom';

import { Button } from 'ui';
import { Modal } from 'ui/Modal/Modal';

import styles from './ZonesSelectorWrapper.module.scss';
import { ZonesSelectorModal } from '../ZonesSelectorModal/ZonesSelectorModal';

import { ZonesSelectorWrapperProps } from '.';

export function ZonesSelectorWrapper({
  className,
  children,
  zonesList,
  modalPosition = 'left',
  onModalStateChanged,
  onZoneSelected,
}: ZonesSelectorWrapperProps): JSX.Element {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<any>();

  const toggleSearch = () => setSearchVisible((value) => !value);

  useEffect(() => {
    onModalStateChanged?.(isSearchVisible);
  }, [isSearchVisible, onModalStateChanged]);

  useEffect(() => {
    if (isSearchVisible) {
      const offset = wrapperRef.current?.getBoundingClientRect();
      setOffset(offset);
    }
  }, [isSearchVisible]);

  const location = useLocation();
  useEffect(() => {
    setSearchVisible(false);
  }, [location]);

  return (
    <>
      <div ref={wrapperRef} className={cn(styles.container, { [styles.active]: isSearchVisible })}>
        <Button className={cn(className, styles.button)} onClick={toggleSearch}>
          {children}
        </Button>
      </div>
      {isSearchVisible && (
        <Modal isOpen={isSearchVisible} onClose={() => setSearchVisible(false)}>
          <ZonesSelectorModal
            modalPosition={modalPosition}
            currentZone={undefined}
            zonesList={zonesList}
            onZoneSelected={onZoneSelected}
            offset={offset}
          />
        </Modal>
      )}
    </>
  );
}
