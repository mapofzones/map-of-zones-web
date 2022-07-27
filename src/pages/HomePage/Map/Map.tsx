import { useCallback, useEffect, useRef } from 'react';

import ForceGraph2D, { NodeObject } from 'react-force-graph-2d';

import { useClearSelectedNode, useHoveredZone, useSelectedZone } from './hooks/eventHooks';
import { useGraphData } from './hooks/useGraphData';
import { useLinkCanvasObject } from './hooks/useLinkCanvasObject';
import { useNodeCanvasObject } from './hooks/useNodeCanvasObject';
import styles from './Map.module.scss';
import { Link, MapNode } from './Types';

export function Map() {
  const [selectedZoneKey, onZoneClick] = useSelectedZone();
  const [hoveredZoneKey, onZoneHover] = useHoveredZone();
  const { graphData, loading } = useGraphData();

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

  const onZoomClick = useCallback(() => {
    graphRef.current.zoom(2, 1000);
  }, []);

  return (
    <div className={styles.container}>
      <ForceGraph2D
        ref={graphRef}
        nodeId="zone"
        nodeLabel={undefined}
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
      <button onClick={onZoomClick}>Zoom in</button>
    </div>
  );
}
