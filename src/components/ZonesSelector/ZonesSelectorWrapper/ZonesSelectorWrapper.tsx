import React, { ReactNode, useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import { useLocation } from 'react-router-dom';

import { Modal } from 'ui/Modal/Modal';

import styles from './ZonesSelectorWrapper.module.scss';
import { ZonesSelectorModal } from '../ZonesSelectorModal/ZonesSelectorModal';

import { ZonesSelectorWrapperProps } from '.';

export function ZonesSelectorWrapper({
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
        {children &&
          React.Children.map<ReactNode, ReactNode>(children, (child) => {
            if (!React.isValidElement(child)) {
              return child;
            }
            return React.cloneElement(child, {
              className: cn(child.props.className, styles.button),
              onClick: toggleSearch,
            } as any);
          })}
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
