import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import ForceGraph2D, { ForceGraphMethods, NodeObject } from 'react-force-graph-2d';

import { Map2dProps } from './Map2d.props';
import { MemoizedSeeDetailsPopupButton } from './SeeDetailsPopupButton';
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
  const [stopDisplayingPopup, setStopDisplayingPopup] = useState(true);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const showDetailedButton = mapData.nodes.findIndex((node) => node.zone === selectedZoneKey) >= 0;

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

  return (
    <>
      {selectedZoneKey && !stopDisplayingPopup && showDetailedButton && (
        <MemoizedSeeDetailsPopupButton
          x={x}
          y={y}
          selectedZoneKey={selectedZoneKey}
          zoomValue={zoomValue}
        />
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
          setStopDisplayingPopup(true);
        }}
        onZoomEnd={(value: any) => {
          const zoom = value?.k ?? 1;
          setZoomValue(zoom);

          const fg = graphRef.current;
          const coords = fg?.screen2GraphCoords(0, 0);
          const x = -(coords?.x ?? 0);
          const y = -(coords?.y ?? 0) - 10;
          setX(x * zoom);
          setY(y * zoom);
          setStopDisplayingPopup(false);
        }}
      />
    </>
  );
}
