import { useEffect, useRef } from 'react';

import ForceGraph3D, { ForceGraphMethods, NodeObject } from 'react-force-graph-3d';

import { useClearSelectedNode } from '../hooks/eventHooks';
import { useZonesAdditionalInfo } from '../hooks/useMapAdditionalData';
import { MapNode } from '../Types';
import { useNodeThreeObject } from './hooks/hooks';
import { Map3dProps } from './Map3d.props';

export function Map3d({
  data,
  hoveredZoneKey,
  selectedZoneKey,
  onZoneClick,
  onZoneHover,
  windowSize,
  forceZoom,
  images,
}: Map3dProps) {
  const graphRef = useRef<ForceGraphMethods>();
  const mapData = useZonesAdditionalInfo(data, selectedZoneKey);

  const nodeThreeObject = useNodeThreeObject(selectedZoneKey, null);

  const clearSelectedNode = useClearSelectedNode(selectedZoneKey);

  useEffect(() => {
    const fg = graphRef.current;

    // links
    fg?.d3Force('link')?.distance(() => Math.random() * 100 + 150);

    // charge
    fg?.d3Force('charge')?.distanceMax(200);
  }, []);

  return (
    <ForceGraph3D
      ref={graphRef}
      nodeId="zone"
      nodeLabel={''}
      height={windowSize.height - 8}
      width={windowSize.width - 376}
      nodeRelSize={4}
      nodeVal={(data: NodeObject) => {
        const zone = data as MapNode;
        return zone.radius * 2;
      }}
      graphData={mapData}
      onNodeHover={onZoneHover}
      nodeThreeObject={nodeThreeObject}
      nodeThreeObjectExtend
      onNodeClick={onZoneClick}
      onLinkHover={onZoneHover}
      linkColor={'rgb(255, 255, 255)'}
      linkThreeObjectExtend
      d3AlphaDecay={0.02}
      d3VelocityDecay={0.3}
      showNavInfo={true}
      onBackgroundClick={clearSelectedNode}
    />
  );
}
