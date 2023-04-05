import { Suspense, useCallback, useRef, useState } from 'react';

import cn from 'classnames';
import { motion } from 'framer-motion';

import { Icon2d, Icon3d, ZoomIn, ZoomOut } from 'assets/icons';
import { Button } from 'components';
import { ButtonSize, ButtonType } from 'components/ui/Button/Button.props';
import { DefaultErrorFallback } from 'ErrorBoundary';
import { ErrorBoundary } from 'ErrorBoundary/ErrorBoundary';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';

import { useGraphData } from './Map/hooks/useGraphData';
import { Map } from './Map/Map';
import styles from './MapContainer.module.scss';
import { MapContainerProps } from './MapContainer.props';
import { DefaultMapType, MapType } from './MapContainer.types';
import { MapLegend } from './MapLegend';

export default function MapContainer({ className }: MapContainerProps) {
  const [mapType, setMapType] = useDefaultSearchParam<MapType>('mapType', DefaultMapType, false);
  const increaseZoom = useRef<() => void | null>(null);
  const decreaseZoom = useRef<() => void | null>(null);

  const { data } = useGraphData();

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

  const MotionIcon3d = motion(Icon3d);
  const MotionIcon2d = motion(Icon2d);
  const MapTypeIcon = mapType === '2d' ? MotionIcon3d : MotionIcon2d;

  return (
    <div className={cn(styles.container, className)}>
      <MapLegend />

      <ErrorBoundary fallback={<DefaultErrorFallback />}>
        <Suspense>
          <Map
            data={data}
            mapType={mapType}
            increaseZoom={increaseZoom}
            decreaseZoom={decreaseZoom}
            disableZoomIn={(value: boolean) => setIsZoomInDisabled(value)}
            disableZoomOut={(value: boolean) => setIsZoomOutDisabled(value)}
          />
        </Suspense>
      </ErrorBoundary>

      <div className={styles.leftButtonsContainer}>
        <Button
          buttonType={ButtonType.PRIMARY}
          size={ButtonSize.MEDIUM}
          className={styles.zoomInBtn}
          disabled={isZoomInDisabled}
          onClick={onZoomIn}
        >
          <ZoomIn className={styles.icon} />
        </Button>
        <Button
          buttonType={ButtonType.PRIMARY}
          size={ButtonSize.MEDIUM}
          className={styles.zoomOutBtn}
          disabled={isZoomOutDisabled}
          onClick={onZoomOut}
        >
          <ZoomOut className={styles.icon} />
        </Button>
        <Button
          buttonType={ButtonType.PRIMARY}
          size={ButtonSize.MEDIUM}
          className={styles.switchMapType}
          onClick={switchMapType}
        >
          <MapTypeIcon
            initial={{ opacity: 0, translateY: '-100%' }}
            animate={{ opacity: 1, translateY: 0 }}
            className={styles.icon}
          />
        </Button>
      </div>
    </div>
  );
}
