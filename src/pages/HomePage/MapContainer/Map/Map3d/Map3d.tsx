import { useEffect, useMemo, useRef } from 'react';

import ForceGraph3D, { ForceGraphMethods, NodeObject } from 'react-force-graph-3d';

import { useClearSelectedNode } from '../hooks/eventHooks';
import { useZonesAdditionalInfo } from '../hooks/useMapAdditionalData';
import { getZoneKey, MapData, MapLink, MapNode, SelectedZoneKeyType } from '../Types';
import { useLinkThreeObject } from './hooks/useLinkThreeObject';
import { useNodeThreeObject } from './hooks/useNodeThreeObject';
import { Map3dProps } from './Map3d.props';

export function Map3d({
  data,
  hoveredZoneKey,
  selectedZoneKey,
  onZoneClick,
  onZoneHover,
  height,
  width,
  forceZoom,
  images,
}: Map3dProps) {
  const graphRef = useRef<ForceGraphMethods>();
  const mapData = useZonesAdditionalInfo(data, selectedZoneKey);

  const neighbours: Set<string> = useMemo(
    () => getNeighboursForSelectedZone(selectedZoneKey, mapData),
    [mapData, selectedZoneKey]
  );

  const nodeThreeObject = useNodeThreeObject(selectedZoneKey, neighbours);
  const linkThreeObject = useLinkThreeObject(selectedZoneKey);

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
      height={height}
      width={width}
      nodeRelSize={4}
      nodeVal={(data: NodeObject) => {
        const zone = data as MapNode;
        return zone.radius * 2;
      }}
      graphData={mapData}
      onNodeHover={onZoneHover}
      nodeThreeObject={nodeThreeObject}
      linkThreeObject={linkThreeObject}
      onNodeClick={onZoneClick}
      onLinkHover={onZoneHover}
      linkColor={'rgb(255, 255, 255)'}
      d3AlphaDecay={0.02}
      d3VelocityDecay={0.3}
      showNavInfo={false}
      onBackgroundClick={clearSelectedNode}
    />
  );
}

function getNeighboursForSelectedZone(selectedZoneKey: SelectedZoneKeyType, mapData: MapData) {
  const neighbours: Set<string> = new Set();
  if (selectedZoneKey) {
    for (let index = 0; index < mapData.links.length; index++) {
      const link = mapData.links[index];
      const linkSource = getZoneKey(link.source);
      const linkTarget = getZoneKey(link.target);
      if (linkSource === selectedZoneKey) {
        neighbours.add(linkTarget);
      }
      if (linkTarget === selectedZoneKey) {
        neighbours.add(linkSource);
      }
    }
  }
  return neighbours;
}
