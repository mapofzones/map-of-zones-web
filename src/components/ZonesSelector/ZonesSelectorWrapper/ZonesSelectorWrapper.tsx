import React, { ReactNode, useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import { useLocation } from 'react-router-dom';

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
  const [isVisible, setVisible] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<DOMRect | undefined>(undefined);

  const toggleSearch = () => setVisible((value) => !value);

  useEffect(() => {
    onModalStateChanged?.(isVisible);
  }, [isVisible, onModalStateChanged]);

  useEffect(() => {
    if (isVisible) {
      const offset = wrapperRef.current?.getBoundingClientRect();
      setOffset(offset);
    }
  }, [isVisible]);

  const location = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);

  return (
    <>
      <div ref={wrapperRef} className={cn(styles.container, { [styles.active]: isVisible })}>
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
      {isVisible && (
        <ZonesSelectorModal
          isOpen={isVisible}
          onClose={() => setVisible(false)}
          zonesList={zonesList}
          onZoneSelected={onZoneSelected}
          modalPosition={modalPosition}
          offset={offset}
        />
      )}
    </>
  );
}
