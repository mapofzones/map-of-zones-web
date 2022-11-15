import { useCallback, useEffect, useRef } from 'react';

import cn from 'classnames';
import ForceGraph2D, { ForceGraphMethods, NodeObject } from 'react-force-graph-2d';

import { useClearSelectedNode } from '../hooks/eventHooks';
import { useLinkCanvasObject } from '../hooks/useLinkCanvasObject';
import { useZonesAdditionalInfo } from '../hooks/useMapAdditionalData';
import { useNodeCanvasObject } from '../hooks/useNodeCanvasObject';
import { MapLink, MapNode } from '../Types';
import styles from './Map2d.module.scss';
import { Map2dProps } from './Map2d.props';

export function Map2d({
  data,
  hoveredZoneKey,
  selectedZoneKey,
  onZoneClick,
  onZoneHover,
  height,
  width,
  forceZoom,
  images,
}: Map2dProps) {
  const mapData = useZonesAdditionalInfo(data, selectedZoneKey);

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

  useEffect(() => {
    graphRef.current?.zoom(forceZoom, 500);
  }, [forceZoom]);

  return (
    <>
      <div className={styles.legend}>
        <span className={cn(styles.circle, styles.sendCircle)}></span>Mainly Sends, $
        <span className={cn(styles.circle, styles.receiveCircle)}></span>Mainly Receives, $
      </div>

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
        maxZoom={4}
        minZoom={0.75}
        cooldownTime={Infinity}
        enableZoomInteraction={true}
        enableNodeDrag={false}
      />
    </>
  );
}
