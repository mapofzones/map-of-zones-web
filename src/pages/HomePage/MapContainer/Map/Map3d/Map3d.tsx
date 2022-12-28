import { useEffect, useMemo, useRef } from 'react';

import ForceGraph3D, { ForceGraphMethods, NodeObject } from 'react-force-graph-3d';

import { useClearSelectedNode } from '../hooks/eventHooks';
import { CanvasesMap, MapNode } from '../Types';
import { useZonesAdditional3dInfo } from './hooks/useAdditional3dInfo';
import { useLinkDirectionalParticles } from './hooks/useLinkDirectionalParticles';
import { useLinkThreeObject } from './hooks/useLinkThreeObject';
import { useNodeThreeObject } from './hooks/useNodeThreeObject';
import { useWheelWithThrottling } from './hooks/useWheelWithThrottling';
import { Map3dProps } from './Map3d.props';
import { changeGraphZoom } from './utils/changeGraphZoom';
import { drawNode3d } from './utils/drawNode3d';

const ZOOM_VALUES = [800, 600, 400, 200, 100];

export function Map3d({
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
}: Map3dProps) {
  const graphRef = useRef<ForceGraphMethods>();
  const graphContainerRef = useRef<HTMLDivElement>(null);
  const mapData = useZonesAdditional3dInfo(data, selectedZoneKey);

  useEffect(() => {
    (increaseZoom as any).current = () => {
      const graph = graphRef.current;
      if (!graph) {
        return;
      }

      const position = graph.camera().position;
      if (position) {
        const currentZoom = Math.hypot(position.x, position.y, position.z);
        for (let zoomIndex = 0; zoomIndex < ZOOM_VALUES.length; zoomIndex++) {
          const zoomValue = ZOOM_VALUES[zoomIndex];
          if (zoomValue < currentZoom) {
            changeGraphZoom(graph, position, zoomValue, currentZoom);
            return;
          }
        }
      }
    };
  }, [increaseZoom]);

  useEffect(() => {
    (decreaseZoom as any).current = () => {
      const graph = graphRef.current;
      if (!graph) {
        return;
      }

      const position = graph.camera().position;
      if (position) {
        const currentZoom = Math.hypot(position.x, position.y, position.z);
        for (let zoomIndex = ZOOM_VALUES.length - 1; zoomIndex >= 0; zoomIndex--) {
          const zoomValue = ZOOM_VALUES[zoomIndex];
          if (zoomValue > currentZoom) {
            changeGraphZoom(graph, position, zoomValue, currentZoom);
            return;
          }
        }
      }
    };
  }, [decreaseZoom]);

  const zoneCanvases = useMemo(() => {
    const canvases: CanvasesMap = {};
    for (let index = 0; index < mapData.nodes.length; index++) {
      const node = mapData.nodes[index];
      const canvas = drawNode3d(node, images);
      canvases[node.zone] = canvas;
    }
    return canvases;
  }, [images, mapData.nodes]);

  const nodeThreeObject = useNodeThreeObject(
    selectedZoneKey,
    hoveredZoneKey,
    mapData.links,
    zoneCanvases
  );
  const linkThreeObject = useLinkThreeObject(selectedZoneKey, hoveredZoneKey);
  const linkDirectionalParticles = useLinkDirectionalParticles(selectedZoneKey, hoveredZoneKey);

  const clearSelectedNode = useClearSelectedNode(selectedZoneKey);

  useEffect(() => {
    const fg = graphRef.current;
    fg?.d3Force('link', null as never);
    fg?.d3Force('charge')?.strength(0);
    fg?.d3Force('center')?.strength(0);

    const controls = fg?.controls() as any;
    controls.noZoom = true;
  }, []);

  useWheelWithThrottling(
    graphRef,
    graphContainerRef,
    ZOOM_VALUES[ZOOM_VALUES.length - 1],
    ZOOM_VALUES[0]
  );

  useEffect(() => {
    if (selectedZoneKey) {
      const node = mapData.nodes.find(({ zone }) => selectedZoneKey === zone) as any;
      const position = graphRef.current?.camera().position;

      if (!node || !position) {
        return;
      }

      const distance = 350;
      const x = node.x || 0;
      const y = node.y || 0;
      const z = node.z || 0;

      const zoomRatio = 1 + distance / Math.hypot(x, y, z);

      graphRef.current?.cameraPosition(
        {
          x: x * zoomRatio,
          y: y * zoomRatio,
          z: z * zoomRatio,
        },
        {
          x: 0,
          y: 0,
          z: 0,
        },
        2000
      );
    }
  }, [mapData.nodes, selectedZoneKey]);

  return (
    <div ref={graphContainerRef}>
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
        backgroundColor={'#ffffff00'}
        graphData={mapData}
        onNodeHover={onZoneHover}
        nodeThreeObject={nodeThreeObject}
        linkThreeObject={linkThreeObject}
        onNodeClick={onZoneClick}
        onLinkHover={onZoneHover}
        linkCurvature={0.3}
        linkDirectionalParticles={linkDirectionalParticles}
        linkDirectionalParticleSpeed={0.001}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleColor={() => '#ffffff'}
        linkDirectionalParticleResolution={8}
        d3AlphaDecay={0.02}
        d3VelocityDecay={0.3}
        showNavInfo={false}
        enableNodeDrag={false}
        onBackgroundClick={clearSelectedNode}
        enableNavigationControls={true}
      />
    </div>
  );
}
