import { useEffect, useMemo, useRef, useState } from 'react';

import ForceGraph3D, { ForceGraphMethods, NodeObject } from 'react-force-graph-3d';
import { Vector3 } from 'three';

import { useClearSelectedNode } from '../hooks/eventHooks';
import { CanvasesMap, MapNode } from '../Types';
import { useZonesAdditional3dInfo } from './hooks/useAdditional3dInfo';
import { useLinkDirectionalParticles } from './hooks/useLinkDirectionalParticles';
import { useLinkThreeObject } from './hooks/useLinkThreeObject';
import { useNodeThreeObject } from './hooks/useNodeThreeObject';
import { useWheel } from './hooks/useWheelWithThrottling';
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
  const [mapDataInited, setMapDataInited] = useState(false);

  const mapData = useZonesAdditional3dInfo(data);

  const graphRef = useRef<ForceGraphMethods>();
  const graphContainerRef = useRef<HTMLDivElement>(null);

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

  useWheel(graphRef, graphContainerRef, ZOOM_VALUES[ZOOM_VALUES.length - 1], ZOOM_VALUES[0]);

  useEffect(() => {
    if (mapData?.nodes && mapData.nodes.length > 0) {
      setMapDataInited(true);
    }
  }, [mapData.nodes]);

  useEffect(() => {
    if (!selectedZoneKey && mapDataInited) {
      const node = mapData.nodes[0] as any;
      if (!node) {
        return;
      }

      rotateCamera(graphRef.current, node, 400, 5000);
    }
    // don't need to use selectedZoneKey and mapData.nodes to change camera position only after data was inited
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapDataInited]);

  useEffect(() => {
    if (selectedZoneKey) {
      const node = mapData.nodes.find(({ zone }) => selectedZoneKey === zone) as any;
      if (!node) {
        return;
      }
      rotateCamera(graphRef.current, node, 350, 2000);
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

function rotateCamera(
  graph: ForceGraphMethods | undefined,
  rotateToPoint: Vector3,
  distance: number,
  transitionMs: number
) {
  const position = graph?.camera().position;
  if (!position) {
    return;
  }

  const x = rotateToPoint.x || 0;
  const y = rotateToPoint.y || 0;
  const z = rotateToPoint.z || 0;

  const zoomRatio = 1 + distance / Math.hypot(x, y, z);
  let newX = x * zoomRatio;
  const newY = y * zoomRatio;
  const newZ = z * zoomRatio;
  // fix bug if both coordinates equal to 0
  if (!newX && !newZ) {
    newX = 10;
  }
  graph.cameraPosition(
    {
      x: newX,
      y: newY,
      z: newZ,
    },
    {
      x: 0,
      y: 0,
      z: 0,
    },
    transitionMs
  );
}
