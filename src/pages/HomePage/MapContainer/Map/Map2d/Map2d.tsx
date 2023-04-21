import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import cn from 'classnames';
import ForceGraph2D, { ForceGraphMethods, NodeObject } from 'react-force-graph-2d';

import { ArrowRight } from 'assets/icons';
import { useNavigateWithSearchParams } from 'hooks/useNavigateWithSearchParams';
import { getZonesOverviewPath } from 'routing';

import styles from './Map2d.module.scss';
import { Map2dProps } from './Map2d.props';
import { useClearSelectedNode } from '../hooks/eventHooks';
import { useLinkCanvasObject } from '../hooks/useLinkCanvasObject';
import { useZonesAdditionalInfo } from '../hooks/useMapAdditionalData';
import { useNodeCanvasObject } from '../hooks/useNodeCanvasObject';
import { MapLink, MapNode } from '../Types';

const ZOOM_MIN_VALUE = 0.75;
const ZOOM_MAX_VALUE = 3.375;
const ZOOM_RATIO = 1.5;

export default function Map2d({
  data,
  hoveredZoneKey,
  selectedZoneKey,
  onZoneClick,
  onZoneHover,
  height,
  width,
  images,
  increaseZoom,
  decreaseZoom,
  disableZoomIn,
  disableZoomOut,
}: Map2dProps) {
  const mapData = useZonesAdditionalInfo(data, selectedZoneKey);
  const [zoomValue, setZoomValue] = useState<number>(1);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const graphRef = useRef<ForceGraphMethods>();

  useEffect(() => {
    const fg = graphRef.current;
    fg?.d3Force('link', null as never);
    fg?.d3Force('charge')?.strength(0);
    fg?.d3Force('center')?.strength(0);
  }, []);

  const nodeCanvasObject = useNodeCanvasObject(
    selectedZoneKey,
    hoveredZoneKey,
    mapData.links as MapLink[],
    images
  );

  const linkCanvasObject = useLinkCanvasObject(selectedZoneKey, hoveredZoneKey);

  const clearSelectedNode = useClearSelectedNode(selectedZoneKey);

  const zoom = useCallback((value: number) => {
    graphRef.current?.zoom(value, 500);
  }, []);

  const zoomIn = useCallback(() => {
    zoom(zoomValue * ZOOM_RATIO);
  }, [zoom, zoomValue]);

  const zoomOut = useCallback(() => {
    zoom(zoomValue / ZOOM_RATIO);
  }, [zoom, zoomValue]);

  useEffect(() => {
    (increaseZoom as any).current = zoomIn;
  }, [increaseZoom, zoomIn]);

  useEffect(() => {
    (decreaseZoom as any).current = zoomOut;
  }, [decreaseZoom, zoomOut]);

  useEffect(() => {
    disableZoomIn(zoomValue >= ZOOM_MAX_VALUE);
    disableZoomOut(zoomValue <= ZOOM_MIN_VALUE);
  }, [disableZoomIn, disableZoomOut, zoomValue]);

  const navigateWithSearchParams = useNavigateWithSearchParams();

  const onZoneInfoRowClick = (zoneKey: string) => {
    navigateWithSearchParams(`/${getZonesOverviewPath(zoneKey)}`);
  };

  return (
    <>
      {selectedZoneKey && (
        <>
          <div
            className={styles.seeDetailsBtn}
            style={{
              top: `${y}px`,
              left: `${x}px`,
              fontSize: `${14 * zoomValue}px`,
              padding: `${4 * zoomValue}px ${8 * zoomValue}px`,
            }}
            onClick={() => onZoneInfoRowClick(selectedZoneKey)}
          >
            <div
              className={cn(styles.triangle, styles.bottom)}
              style={{
                borderWidth: `${8 * zoomValue}px`,
              }}
            />
            <span className={styles.btnContent}>
              See Details
              <ArrowRight
                className={styles.arrowIcon}
                style={{
                  width: `${8 * zoomValue}px`,
                  height: `${13 * zoomValue}px`,
                  marginLeft: `${6 * zoomValue}px`,
                }}
              />
            </span>
          </div>
        </>
      )}
      <ForceGraph2D
        ref={graphRef}
        nodeId="zone"
        nodeLabel={''}
        height={height}
        width={width}
        graphData={mapData}
        nodeCanvasObject={nodeCanvasObject}
        linkCanvasObject={linkCanvasObject}
        onNodeClick={onZoneClick}
        onNodeHover={onZoneHover}
        onLinkClick={clearSelectedNode}
        onBackgroundClick={clearSelectedNode}
        nodeVal={useCallback((data: NodeObject) => {
          const zone = data as MapNode;
          return zone.radius * 2;
        }, [])}
        maxZoom={ZOOM_MAX_VALUE}
        minZoom={ZOOM_MIN_VALUE}
        cooldownTime={Infinity}
        enableZoomInteraction={true}
        enableNodeDrag={false}
        onZoom={() => {
          setX(-10);
          setY(-10);
        }}
        onZoomEnd={(value: any) => {
          const fg = graphRef.current;
          const coords = fg?.screen2GraphCoords(0, 0);
          setX(-(coords?.x ?? 0) * (value?.k ?? 1));
          setY(-(coords?.y ?? 0) * (value?.k ?? 1));
          setZoomValue(value.k);
        }}
      />
    </>
  );
}
