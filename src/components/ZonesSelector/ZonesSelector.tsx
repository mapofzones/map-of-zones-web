import { useState } from 'react';

import cn from 'classnames';

import { ZoneLogo } from 'components';
import { AnimatedArrowDown, Button } from 'ui';

import styles from './ZonesSelector.module.scss';
import { ZonesSelectorProps } from './ZonesSelector.props';
import { ZonesSelectorWrapper } from './ZonesSelectorWrapper';

export function ZonesSelector({
  className,
  classNameButton,
  zone,
  logoSize = '36px',
  loading,
  zonesList,
  onZonesSelected,
}: ZonesSelectorProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const selectedZone = zonesList.find((item) => item.zone === zone);

  const onModalStateChanged = (opened: boolean): void => {
    setIsOpened(opened);
  };

  return (
    <>
      <ZonesSelectorWrapper
        className={className}
        zonesList={zonesList}
        onModalStateChanged={onModalStateChanged}
        onZoneSelected={onZonesSelected}
      >
        <Button className={cn(styles.button, classNameButton)}>
          <ZoneLogo
            logoUrl={selectedZone?.logoUrl}
            name={selectedZone?.name}
            size={logoSize}
            loading={loading}
            className={styles.zoneLogo}
          />
          <span className={styles.zoneName}>{selectedZone?.name}</span>
          <AnimatedArrowDown className={styles.arrowContainer} isReverted={isOpened} />
        </Button>
      </ZonesSelectorWrapper>
    </>
  );
}
