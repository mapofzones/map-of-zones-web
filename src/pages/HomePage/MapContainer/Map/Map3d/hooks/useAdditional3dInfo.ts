import { useEffect, useState } from 'react';

import { Object3D, Vector3 } from 'three';

import {
  MapData,
  MapLink,
  MapNode,
  SelectedZoneKeyType,
  ZoneLinkApi,
  ZoneStatApi,
} from '../../Types';
import { getZoneKey } from '../../utils/getZoneKey';

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
          ...positions[sourceZone],
        };
        const target = {
          zone: link.target,
          ...positions[targetZone],
        };

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
  positions: { [key: string]: Vector3 }
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
const zoneRadiuses = [45, 34, 26];
const zoneLogoRadiuses = [19, 10, 6.5];
const fontSizes = [20, 18, 16];

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
  positions: { [key: string]: Vector3 }
) {
  const pos = positions[node.zone];
  //create image
  const bitmap = document.createElement('canvas');
  const g = bitmap.getContext('2d');
  bitmap.width = 100;
  bitmap.height = 100;
  if (g) {
    // g.font = 'Bold 20px Arial';

    g.fillStyle = 'red';
    // g.fillText(node.name, 0, 20);
    g.strokeStyle = 'red';
    g.arc(50, 50, 50, 0, Math.PI * 2);
    // g.strokeText(node.name, 0, 20);
  }

  // canvas contents will be used for a texture
  // const texture = new Texture(bitmap);
  // texture.needsUpdate = true;
  const texture = bitmap.toDataURL('image/png');

  return {
    ...node,
    ...pos,
    texture: bitmap,
  } as MapNode;
}

function getPositions(arr: ZoneStatApi[]) {
  const vector = new Vector3();
  const targets: { [key: string]: Vector3 } = {};

  for (let i = 0, l = arr.length; i < l; i++) {
    const phi = Math.acos(-1 + (2 * i) / l);
    const theta = Math.sqrt(l * Math.PI) * phi;

    const object = new Object3D();
    object.position.setFromSphericalCoords(220, phi, theta);
    object.lookAt(vector);

    targets[arr[i].zone] = new Vector3(object.position.x, object.position.z, -object.position.y);
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
