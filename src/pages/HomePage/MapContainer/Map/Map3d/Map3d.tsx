import { useEffect, useMemo, useRef, useState } from 'react';

import ForceGraph3D, { ForceGraphMethods, NodeObject } from 'react-force-graph-3d';
import { Vector3 } from 'three';

import { useClearSelectedNode } from '../hooks/eventHooks';
import { getZoneKey, MapData, MapNode, SelectedZoneKeyType } from '../Types';
import { useZonesAdditional3dInfo } from './hooks/useAdditional3dInfo';
import { useLinkDirectionalParticles } from './hooks/useLinkDirectionalParticles';
import { useLinkThreeObject } from './hooks/useLinkThreeObject';
import { useNodeThreeObject } from './hooks/useNodeThreeObject';
import { Map3dProps } from './Map3d.props';

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
  const mapData = useZonesAdditional3dInfo(data, selectedZoneKey);

  useEffect(() => {
    (increaseZoom as any).current = () => {
      const position = graphRef.current?.camera().position;
      if (position) {
        for (let zoomIndex = 0; zoomIndex < ZOOM_VALUES.length; zoomIndex++) {
          const zoomValue = ZOOM_VALUES[zoomIndex];
          const currentZoom = Math.hypot(position.x, position.y, position.z);
          if (zoomValue < currentZoom) {
            changeZoom(position, zoomValue, currentZoom);
            return;
          }
        }
      }
    };
  }, [increaseZoom]);

  useEffect(() => {
    (decreaseZoom as any).current = () => {
      const position = graphRef.current?.camera().position;
      if (position) {
        for (let zoomIndex = ZOOM_VALUES.length - 1; zoomIndex > 0; zoomIndex--) {
          const zoomValue = ZOOM_VALUES[zoomIndex];
          const currentZoom = Math.hypot(position.x, position.y, position.z);
          if (zoomValue > currentZoom) {
            changeZoom(position, zoomValue, currentZoom);
            return;
          }
        }
      }
    };
  }, [decreaseZoom]);

  const neighbours: Set<string> = useMemo(
    () => getNeighboursForSelectedZone(selectedZoneKey, mapData),
    [mapData, selectedZoneKey]
  );

  const zoneCanvases = useMemo(() => {
    const canvases: { [key: string]: HTMLCanvasElement } = {};
    for (let index = 0; index < mapData.nodes.length; index++) {
      const node = mapData.nodes[index];
      const canvas = drawNode3d(node, images);
      canvases[node.zone] = canvas;
    }
    return canvases;
  }, [images, mapData.nodes]);

  const nodeThreeObject = useNodeThreeObject(selectedZoneKey, neighbours, zoneCanvases);
  const linkThreeObject = useLinkThreeObject(selectedZoneKey);
  const linkDirectionalParticles = useLinkDirectionalParticles(selectedZoneKey);

  const clearSelectedNode = useClearSelectedNode(selectedZoneKey);

  useEffect(() => {
    const fg = graphRef.current;
    fg?.d3Force('link', null as never);
    fg?.d3Force('charge')?.strength(0);
    fg?.d3Force('center')?.strength(0);
    const controls = fg?.controls() as any;
    controls.maxDistance = ZOOM_VALUES[0];
    controls.minDistance = ZOOM_VALUES[ZOOM_VALUES.length - 1];
  }, []);

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
    <>
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
        linkCurvature={0.5}
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
      />
    </>
  );

  function changeZoom(currentPosition: Vector3, zoomValue: number, currentZoom: number) {
    const x = currentPosition.x || 0;
    const y = currentPosition.y || 0;
    const z = currentPosition.z || 0;

    const zoomRatio = zoomValue / currentZoom;
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
      0
    );
  }
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

function drawNode3d(node: any, images: any) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const qualityMultiply = 3;
  const radius = node.radius * qualityMultiply;
  const size = radius * qualityMultiply;
  canvas.width = size;
  canvas.height = size;
  if (ctx) {
    const circle = { x: size / 2, y: size / 2, r: radius };

    ctx.fillStyle = node.color;
    ctx.shadowColor = node.color;
    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = 'source-over';
    drawCircle(ctx, circle);
    ctx.shadowColor = null as any;
    ctx.shadowBlur = null as any;

    if (images[node.logoUrl]) {
      ctx.globalCompositeOperation = 'source-over';
      const borderR = node.radius * 0.2;
      ctx.drawImage(
        images[node.logoUrl],
        circle.x - circle.r + borderR,
        circle.y - circle.r + borderR,
        circle.r * 2 - 2 * borderR,
        circle.r * 2 - 2 * borderR
      );
    }

    const grd = ctx.createLinearGradient(
      circle.x - circle.r,
      circle.y - circle.r,
      circle.x + circle.r,
      circle.y + circle.r
    );
    grd.addColorStop(0, 'white');
    grd.addColorStop(1, 'black');
    ctx.fillStyle = grd;
    ctx.globalCompositeOperation = 'hard-light';
    drawCircle(ctx, circle);

    const gradient = ctx.createRadialGradient(
      size / 3,
      size / 3,
      radius / 10, // blink size
      size / 2,
      size / 2,
      radius
    );
    gradient.addColorStop(0, '#ffffff99');
    gradient.addColorStop(1, '#33333D');
    ctx.fillStyle = gradient;
    ctx.globalCompositeOperation = 'overlay';
    drawCircle(ctx, circle);
  }
  return canvas;
}

function drawCircle(ctx: any, c: any) {
  ctx.beginPath();
  ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
  ctx.fill();
}
