import { useMemo } from 'react';

import { useWindowSizeWithDebounce } from 'hooks/useWindowSizeWithDebounce';

import { MapType } from '../MapContainer';
import { useHoveredZone, useSelectedZone } from './hooks/eventHooks';
import { useGraphData } from './hooks/useGraphData';
import { useImagePreloader } from './hooks/useImagePreloader';
import { useZonesAdditionalInfo } from './hooks/useMapAdditionalData';
import { Map2d } from './Map2d';

export function Map({ mapType }: { mapType: MapType }) {
  const [selectedZoneKey, onZoneClick] = useSelectedZone();
  const [hoveredZoneKey, onZoneHover] = useHoveredZone();
  const { data } = useGraphData();
  const mapData = useZonesAdditionalInfo(data, selectedZoneKey);
  const { windowSize } = useWindowSizeWithDebounce(100);

  const imgUrls = useMemo(
    () => mapData.nodes.map((node) => node?.logoUrl ?? '').filter((url) => !!url),
    [mapData.nodes]
  );
  const { images } = useImagePreloader(imgUrls);

  // useEffect(() => {
  //   graphRef.current?.zoom(ZOOM_VALUES[currentZoomIndex], 500);
  // }, [currentZoomIndex]);
  console.log(mapType);

  return (
    <>
      {mapType === '2d' ? (
        <Map2d
          mapData={mapData}
          selectedZoneKey={selectedZoneKey}
          hoveredZoneKey={hoveredZoneKey}
          onZoneClick={onZoneClick}
          onZoneHover={onZoneHover}
          windowSize={windowSize}
          images={images}
        />
      ) : (
        // <></>
        <>3d map</>
      )}
    </>
  );
}
