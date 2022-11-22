import { useEffect, useState } from 'react';

import THREE, { Object3D, Vector3 } from 'three';

import {
  getZoneKey,
  MapData,
  MapLink,
  MapNode,
  Position,
  SelectedZoneKeyType,
  ZoneLinkApi,
  ZoneStatApi,
} from '../../Types';

export function useZonesAdditional3dInfo(
  data: { nodes: ZoneStatApi[]; links: ZoneLinkApi[] },
  selectedZoneKey: SelectedZoneKeyType
) {
  const [graphData, setGraphData] = useState<MapData>({
    nodes: [] as MapNode[],
    links: [] as MapLink[],
  });

  useEffect(() => {
    const positions = getPositions(data.nodes);

    setGraphData((oldData: MapData) => ({
      nodes: getNewNodes(data.nodes, oldData.nodes, selectedZoneKey, positions),
      links: data.links.map((link) => {
        const sourceZone = getZoneKey(link.source);
        const targetZone = getZoneKey(link.target);
        const source = {
          zone: link.source,
          x: positions[sourceZone].position.x,
          y: positions[sourceZone].position.y,
          z: positions[sourceZone].position.z,
        };
        const target = {
          zone: link.target,
          x: positions[targetZone].position.x,
          y: positions[targetZone].position.y,
          z: positions[targetZone].position.z,
        };
        console.log(source, target);
        return {
          isActive: !!link.ibcVolume,
          source,
          target,
        };
      }),
    }));
  }, [data, selectedZoneKey]);
  return graphData;
}

function getNewNodes(
  nodes: ZoneStatApi[],
  oldNodes: MapNode[],
  selectedZoneKey: SelectedZoneKeyType,
  positions: { [key: string]: Object3D }
): MapNode[] {
  const radiusConst = 100;

  const mapNodes = nodes.map((zone: ZoneStatApi, index: number) =>
    enrichNodeWithVisualProperties(index, zone)
  );

  const nodesWithAnimation = mapNodes.map((node: MapNode, index: number, arr: MapNode[]) =>
    enrichNodeWithAnimation(arr, node, selectedZoneKey, index, radiusConst, oldNodes, positions)
  );
  return nodesWithAnimation;
}

const levelLimits = [10, 30];
const zoneRadiuses = [26, 16, 11.5];
const zoneLogoRadiuses = [19, 10, 6.5];
const fontSizes = [11, 10, 8];

function enrichNodeWithVisualProperties(index: number, zone: ZoneStatApi) {
  const level = getLevel(index);
  const radius = getZoneRadiusByLevel(level);
  const logoRadius = getZoneLogoRadiusByLevel(level);
  const color = getZoneColor(zone.ibcVolumeIn, zone.ibcVolumeOut);
  const fontSize = getFontSizeByLevel(level);

  const node: MapNode = {
    ...zone,
    level,
    radius,
    logoRadius,
    color,
    fontSize,
  } as MapNode;
  return node;
}

function enrichNodeWithAnimation(
  arr: MapNode[],
  node: MapNode,
  selectedZoneKey: SelectedZoneKeyType,
  index: number,
  radiusConst: number,
  oldNodes: MapNode[],
  positions: { [key: string]: Object3D }
) {
  const pos = positions[node.zone];
  return {
    ...node,
    x: pos.position.x,
    y: pos.position.y,
    z: pos.position.z,
  } as MapNode;
}

function getPositions(arr: ZoneStatApi[]) {
  const vector = new Vector3();
  const targets: { [key: string]: Object3D } = {};

  for (let i = 0, l = arr.length; i < l; i++) {
    const phi = Math.acos(-1 + (2 * i) / l);
    const theta = Math.sqrt(l * Math.PI) * phi;

    const object = new Object3D();

    object.position.setFromSphericalCoords(300, phi, theta);

    object.lookAt(vector);

    targets[arr[i].zone] = object;
  }
  return targets;
}

function getLevel(nodeIndex: number) {
  for (let i = 0; i < levelLimits.length; i++) {
    const levelLimit = levelLimits[i];
    if (nodeIndex < levelLimit) {
      return i + 1;
    }
  }
  return levelLimits.length + 1;
}

function getValueByLevel(values: number[], level: number) {
  return values[level - 1] ?? values[values.length - 1];
}

function getZoneRadiusByLevel(level: number) {
  return getValueByLevel(zoneRadiuses, level);
}

function getZoneLogoRadiusByLevel(level: number) {
  return getValueByLevel(zoneLogoRadiuses, level);
}

function getFontSizeByLevel(level: number) {
  return getValueByLevel(fontSizes, level);
}

function getZoneColor(valueIn: number | null, valueOut: number | null) {
  return valueOut === null || valueIn === null || valueIn === valueOut
    ? '#ffffff'
    : valueOut > valueIn
    ? '#ee11cc'
    : '#22aaff';
}
