import { useEffect } from 'react';

import cn from 'classnames';

import { useComponentVisible } from 'hooks/useComponentVisible';
import { Button } from 'ui';

import styles from './ZonesSelectorWrapper.module.scss';
import { ZonesSelectorModal } from '../ZonesSelectorModal/ZonesSelectorModal';

import { ZonesSelectorWrapperProps } from '.';

export function ZonesSelectorWrapper({
  className,
  children,
  zonesList,
  onModalStateChanged,
  onZoneSelected,
  ...props
}: ZonesSelectorWrapperProps): JSX.Element {
  const {
    ref,
    isVisible: isSearchVisible,
    setIsVisible: setSearchVisible,
  } = useComponentVisible<HTMLButtonElement>(false);

  const toggleSearch = () => setSearchVisible((value) => !value);

  useEffect(() => {
    onModalStateChanged?.(isSearchVisible);
  }, [isSearchVisible, onModalStateChanged]);

  return (
    <div className={styles.container}>
      <Button ref={ref} className={cn(className, styles.button)} onClick={toggleSearch} {...props}>
        {children}
      </Button>
      {isSearchVisible && (
        <ZonesSelectorModal
          currentZone={undefined}
          zonesList={zonesList}
          onZoneSelected={onZoneSelected}
        />
      )}
    </div>
  );
}
