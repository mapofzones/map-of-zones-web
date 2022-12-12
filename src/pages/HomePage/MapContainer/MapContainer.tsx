import { useCallback, useRef, useState } from 'react';

import cn from 'classnames';

import { Icon2d, Icon3d, ZoomIn, ZoomOut } from 'assets/icons';
import { Button } from 'components';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';

import { Map } from './Map/Map';
import styles from './MapContainer.module.scss';
import { MapContainerProps } from './MapContainer.props';

export type MapType = '2d' | '3d';

export function MapContainer({ className }: MapContainerProps) {
  const [mapType, setMapType] = useDefaultSearchParam<MapType>('mapType', '2d', false);
  const increaseZoom = useRef<() => void | null>(null);
  const decreaseZoom = useRef<() => void | null>(null);

  const [isZoomInDisabled, setIsZoomInDisabled] = useState(false);
  const [isZoomOutDisabled, setIsZoomOutDisabled] = useState(false);

  const onZoomIn = useCallback(() => {
    if (!isZoomInDisabled) {
      increaseZoom?.current && increaseZoom.current();
    }
  }, [isZoomInDisabled]);

  const onZoomOut = useCallback(() => {
    if (!isZoomOutDisabled) {
      decreaseZoom?.current && decreaseZoom.current();
    }
  }, [isZoomOutDisabled]);

  const switchMapType = useCallback(() => {
    setMapType(mapType === '2d' ? '3d' : '2d');
  }, [mapType, setMapType]);

  return (
    <div className={cn(styles.container, className)}>
      <Map
        mapType={mapType}
        increaseZoom={increaseZoom}
        decreaseZoom={decreaseZoom}
        disableZoomIn={(value: boolean) => setIsZoomInDisabled(value)}
        disableZoomOut={(value: boolean) => setIsZoomOutDisabled(value)}
      />
      <div className={styles.leftButtonsContainer}>
        <Button className={styles.zoomInBtn} disabled={isZoomInDisabled} onClick={onZoomIn}>
          <ZoomIn className={styles.icon} />
        </Button>
        <Button className={styles.zoomOutBtn} disabled={isZoomOutDisabled} onClick={onZoomOut}>
          <ZoomOut className={styles.icon} />
        </Button>
        <Button className={styles.switchMapType} onClick={switchMapType}>
          {mapType === '2d' && <Icon3d className={styles.icon} />}
          {mapType === '3d' && <Icon2d className={styles.icon} />}
        </Button>
      </div>
    </div>
  );
}
