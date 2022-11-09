import { useMemo } from 'react';

import { useWindowSizeWithDebounce } from 'hooks/useWindowSizeWithDebounce';

import { MapType } from '..';
import { useHoveredZone, useSelectedZone } from './hooks/eventHooks';
import { useGraphData } from './hooks/useGraphData';
import { useImagePreloader } from './hooks/useImagePreloader';
import { Map2d } from './Map2d';

export function Map({ mapType, forceZoom }: { mapType: MapType; forceZoom: number }) {
  const [selectedZoneKey, onZoneClick] = useSelectedZone();
  const [hoveredZoneKey, onZoneHover] = useHoveredZone();
  const { data } = useGraphData();
  const { windowSize } = useWindowSizeWithDebounce(100);

  const imgUrls = useMemo(
    () => data.nodes.map((node) => node?.logoUrl ?? '').filter((url) => !!url),
    [data.nodes]
  );
  const { images } = useImagePreloader(imgUrls);

  return (
    <>
      {mapType === '2d' ? (
        <Map2d
          data={data}
          selectedZoneKey={selectedZoneKey}
          hoveredZoneKey={hoveredZoneKey}
          onZoneClick={onZoneClick}
          onZoneHover={onZoneHover}
          windowSize={windowSize}
          forceZoom={forceZoom}
          images={images}
        />
      ) : (
        <>3d map</>
      )}
    </>
  );
}
