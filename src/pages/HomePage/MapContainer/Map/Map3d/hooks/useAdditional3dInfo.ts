import { useEffect, useState } from 'react';

import { Object3D, Vector3 } from 'three';

import { MapData, MapLink, MapNode, ZoneLinkApi, ZoneStatApi } from '../../Types';
import { getZoneKey } from '../../utils/getZoneKey';

export function useZonesAdditional3dInfo(data: { nodes: ZoneStatApi[]; links: ZoneLinkApi[] }) {
  const [graphData, setGraphData] = useState<MapData>({
    nodes: [] as MapNode[],
    links: [] as MapLink[],
  });

  useEffect(() => {
    const positions = getPositions(data.nodes);

    setGraphData({
      nodes: getNewNodes(data.nodes, positions),
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
    });
  }, [data.links, data.nodes]);
  return graphData;
}

function getNewNodes(nodes: ZoneStatApi[], positions: { [key: string]: Vector3 }): MapNode[] {
  const mapNodes = nodes.map((zone: ZoneStatApi, index: number) =>
    enrichNodeWithVisualProperties(index, zone, positions)
  );
  return mapNodes;
}

const levelLimits = [10, 30];
const zoneRadiuses = [45, 34, 26];
const zoneLogoRadiuses = [19, 10, 6.5];
const fontSizes = [20, 18, 16];

function enrichNodeWithVisualProperties(
  index: number,
  zone: ZoneStatApi,
  positions: { [key: string]: Vector3 }
) {
  const level = getLevel(index);
  const radius = getZoneRadiusByLevel(level);
  const logoRadius = getZoneLogoRadiusByLevel(level);
  const color = getZoneColor(zone.ibcVolumeIn, zone.ibcVolumeOut);
  const fontSize = getFontSizeByLevel(level);
  const pos = positions[zone.zone];

  const node: MapNode = {
    ...zone,
    level,
    radius,
    logoRadius,
    color,
    fontSize,
    ...pos,
  } as MapNode;
  return node;
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

    targets[arr[i].zone] = new Vector3(
      Math.round(object.position.x),
      Math.round(object.position.y),
      Math.round(object.position.z)
    );
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
