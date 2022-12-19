import { useMemo } from 'react';

import textureSphere2Src from 'assets/texture-sphere-2.png';
import textureSphereSrc from 'assets/texture-sphere.png';
import { useWindowSizeWithDebounce } from 'hooks/useWindowSizeWithDebounce';

import { useHoveredZone, useSelectedZone } from './hooks/eventHooks';
import { useGraphData } from './hooks/useGraphData';
import { useImagePreloader } from './hooks/useImagePreloader';
import { MapProps } from './Map.props';
import { Map2d } from './Map2d';
import { Map3d } from './Map3d';

export function Map({
  mapType,
  increaseZoom,
  decreaseZoom,
  disableZoomIn,
  disableZoomOut,
}: MapProps) {
  const [selectedZoneKey, onZoneClick] = useSelectedZone();
  const [hoveredZoneKey, onZoneHover] = useHoveredZone();
  const { data } = useGraphData();
  const { windowSize } = useWindowSizeWithDebounce(100);

  const height = windowSize.height - 8;
  const width = windowSize.width - 376;

  const imgUrls = useMemo(
    () => data.nodes.map((node) => node?.logoUrl ?? '').filter((url) => !!url),
    [data.nodes]
  );
  const images = useImagePreloader([...imgUrls, textureSphereSrc, textureSphere2Src]);

  return (
    <>
      {mapType === '2d' ? (
        <Map2d
          data={data}
          selectedZoneKey={selectedZoneKey}
          hoveredZoneKey={hoveredZoneKey}
          onZoneClick={onZoneClick}
          onZoneHover={onZoneHover}
          height={height}
          width={width}
          images={images}
          increaseZoom={increaseZoom}
          decreaseZoom={decreaseZoom}
          disableZoomIn={disableZoomIn}
          disableZoomOut={disableZoomOut}
        />
      ) : (
        <Map3d
          data={data}
          selectedZoneKey={selectedZoneKey}
          hoveredZoneKey={hoveredZoneKey}
          onZoneClick={onZoneClick}
          onZoneHover={onZoneHover}
          height={height}
          width={width}
          images={images}
          increaseZoom={increaseZoom}
          decreaseZoom={decreaseZoom}
        />
      )}
    </>
  );
}
