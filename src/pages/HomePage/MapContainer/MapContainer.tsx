import { useCallback, useMemo, useState } from 'react';

import cn from 'classnames';

import { Icon3d, ZoomIn, ZoomOut } from 'assets/icons';
import { Button } from 'components';

import { Map } from './Map/Map';
import styles from './MapContainer.module.scss';
import { MapContainerProps } from './MapContainer.props';

export type MapType = '2d' | '3d';
const ZOOM_VALUES = [0.75, 1, 1.5, 2.25, 4];

export function MapContainer({ className }: MapContainerProps) {
  const [currentZoomIndex, setCurrentZoomIndex] = useState(1);
  const [mapType, setMapType] = useState<MapType>('2d');

  const zoomValue = useMemo(() => ZOOM_VALUES[currentZoomIndex], [currentZoomIndex]);

  const isZoomInDisabled = useMemo(
    () => currentZoomIndex >= ZOOM_VALUES.length - 1,
    [currentZoomIndex]
  );

  const isZoomOutDisabled = useMemo(() => currentZoomIndex <= 0, [currentZoomIndex]);

  const onZoomIn = useCallback(() => {
    if (!isZoomInDisabled) {
      setCurrentZoomIndex(currentZoomIndex + 1);
    }
  }, [isZoomInDisabled, currentZoomIndex]);

  const onZoomOut = useCallback(() => {
    if (!isZoomOutDisabled) {
      setCurrentZoomIndex(currentZoomIndex - 1);
    }
  }, [isZoomOutDisabled, currentZoomIndex]);

  const switchMapType = useCallback(() => {
    setMapType((current) => (current === '2d' ? '3d' : '2d'));
  }, []);

  return (
    <div className={cn(styles.container, className)}>
      <Map mapType={mapType} forceZoom={ZOOM_VALUES[currentZoomIndex]} />
      <div className={styles.leftButtonsContainer}>
        <Button className={styles.zoomInBtn} disabled={isZoomInDisabled} onClick={onZoomIn}>
          <ZoomIn className={styles.icon} />
        </Button>
        <Button className={styles.zoomOutBtn} disabled={isZoomOutDisabled} onClick={onZoomOut}>
          <ZoomOut className={styles.icon} />
        </Button>
        <Button className={styles.switchMapType} onClick={switchMapType}>
          <Icon3d className={styles.icon} />
        </Button>
      </div>
    </div>
  );
}
