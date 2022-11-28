import { useEffect, useMemo, useRef } from 'react';

import ForceGraph3D, { ForceGraphMethods, NodeObject } from 'react-force-graph-3d';
import { PerspectiveCamera, Scene } from 'three';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';

import { useClearSelectedNode } from '../hooks/eventHooks';
import { getZoneKey, MapData, MapNode, SelectedZoneKeyType } from '../Types';
import { useZonesAdditional3dInfo } from './hooks/useAdditional3dInfo';
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
  const mapData = useZonesAdditional3dInfo(data, selectedZoneKey);

  const neighbours: Set<string> = useMemo(
    () => getNeighboursForSelectedZone(selectedZoneKey, mapData),
    [mapData, selectedZoneKey]
  );

  const nodeThreeObject = useNodeThreeObject(selectedZoneKey, neighbours, images);
  const linkThreeObject = useLinkThreeObject(selectedZoneKey);

  const clearSelectedNode = useClearSelectedNode(selectedZoneKey);

  useEffect(() => {
    const fg = graphRef.current;
    fg?.d3Force('link', null as never);
    fg?.d3Force('charge')?.strength(0);
    fg?.d3Force('center')?.strength(0);
  }, []);

  // useEffect(() => {
  //   if (!mapData?.nodes.length) {
  //     return;
  //   }
  //   const scene = new Scene();
  //   const aspect = window.innerWidth / window.innerHeight;
  //   const cam = new PerspectiveCamera(45, aspect, 0.1, 1000);
  //   cam.position.set(0, 0, 800);
  //   const labelRenderer = new CSS2DRenderer();
  //   labelRenderer.setSize(window.innerWidth, window.innerHeight);
  //   labelRenderer.domElement.style.position = 'absolute';
  //   labelRenderer.domElement.style.top = '0px';
  //   labelRenderer.domElement.style.pointerEvents = 'none';
  //   //   const renderer = new WebGLRenderer({ antialias: true });
  //   //   renderer.setPixelRatio(window.devicePixelRatio);
  //   //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   document.getElementById('labelContainer')?.appendChild(labelRenderer.domElement);

  //   for (let index = 0; index < mapData.nodes.length; index++) {
  //     const node = mapData.nodes[index] as any;
  //     // console.log(node);
  //     const earthDiv = document.createElement('div');
  //     earthDiv.className = 'lable1';
  //     earthDiv.textContent = node.name;
  //     earthDiv.style.marginTop = '-1em';
  //     earthDiv.style.zIndex = '1000';
  //     const earthLabel = new CSS2DObject(earthDiv);
  //     // scene.position.set(0, 0, 0);
  //     scene.position.set(node.x, node.y, node.z);
  //     scene.add(earthLabel);

  //     // const sphereGeometry = new SphereGeometry(node.radius, 20, 20);
  //     // const sphereMaterial = new MeshLambertMaterial({
  //     //   color: node.color,
  //     //   opacity: 0.7,
  //     //   transparent: true,
  //     // });
  //     // const sphereMaterial = new MeshMatcapMaterial({ color: node.color });
  //     // const sphereMaterial = new MeshPhongMaterial({ color: node.color });
  //     // const sphereMaterial = new MeshPhysicalMaterial({ color: node.color });
  //     // const sphere = new Mesh(sphereGeometry, sphereMaterial);
  //     // sphere.position.set(node.x, node.y, node.z);
  //     // scene.add(sphere);
  //     //
  //   }
  //   labelRenderer.render(scene, cam);
  //   //   // const earthDiv = document.createElement('div');
  //   //   // earthDiv.className = 'lable1';
  //   //   // earthDiv.textContent = node.name;
  //   //   // // document.getElementById('labelContainer')?.appendChild(earthDiv);
  //   //   // earthDiv.style.marginTop = '-1em';
  //   //   // earthDiv.style.zIndex = '1000';
  //   //   // const earthLabel = new CSS2DObject(earthDiv);
  //   //   // scene.add(earthLabel);
  //   //   // earthLabel.position.set(0, 50, 0);
  // }, [mapData.nodes]);

  return (
    <>
      <div id="labelContainer"></div>
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
        enableNodeDrag={false}
        onBackgroundClick={clearSelectedNode}
      />
    </>
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
