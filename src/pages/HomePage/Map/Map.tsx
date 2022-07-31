import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import cn from 'classnames';
import ForceGraph2D, { NodeObject } from 'react-force-graph-2d';

import { Button } from 'components';
import { ZoomIn, ZoomOut } from 'icons';

import { useClearSelectedNode, useHoveredZone, useSelectedZone } from './hooks/eventHooks';
import { useGraphData } from './hooks/useGraphData';
import { useLinkCanvasObject } from './hooks/useLinkCanvasObject';
import { useNodeCanvasObject } from './hooks/useNodeCanvasObject';
import styles from './Map.module.scss';
import { Link, MapNode } from './Types';

const ZOOM_VALUES = [0.75, 1, 1.5, 2.25];

export function Map() {
  const [selectedZoneKey, onZoneClick] = useSelectedZone();
  const [hoveredZoneKey, onZoneHover] = useHoveredZone();
  const { graphData, loading } = useGraphData();
  const [currentZoomIndex, setCurrentZoomIndex] = useState(1);

  const graphRef = useRef<any>();
  useEffect(() => {
    const fg = graphRef.current;
    fg.d3Force('link', null);
    fg.d3Force('charge').strength(-10);
  }, []);

  const nodeCanvasObject = useNodeCanvasObject(
    selectedZoneKey,
    hoveredZoneKey,
    graphData.links as Link[]
  );

  const linkCanvasObject = useLinkCanvasObject(selectedZoneKey, hoveredZoneKey);

  const clearSelectedNode = useClearSelectedNode(selectedZoneKey);

  useEffect(() => {
    graphRef.current.zoom(ZOOM_VALUES[currentZoomIndex], 500);
  }, [currentZoomIndex]);

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

  return (
    <div className={styles.container}>
      <div className={styles.legend}>
        <span className={cn(styles.circle, styles.sendCircle)}></span>Mainly Sends
        <span className={cn(styles.circle, styles.receiveCircle)}></span>Mainly Receives
      </div>
      <ForceGraph2D
        ref={graphRef}
        nodeId="zone"
        nodeLabel={''}
        height={document.documentElement.clientHeight}
        width={document.documentElement.clientWidth - 360}
        graphData={graphData}
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
        cooldownTime={Infinity}
        enableZoomInteraction={false}
        enableNodeDrag={false}
      />
      <div className={styles.leftButtonsContainer}>
        <Button
          Icon={ZoomIn}
          className={styles.zoomInBtn}
          disabled={isZoomInDisabled}
          onClick={onZoomIn}
        />
        <Button
          Icon={ZoomOut}
          className={styles.zoomOutBtn}
          disabled={isZoomOutDisabled}
          onClick={onZoomOut}
        />
      </div>
    </div>
  );
}
