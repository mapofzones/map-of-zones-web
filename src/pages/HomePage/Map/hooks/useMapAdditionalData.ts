import { useEffect, useState } from 'react';

import {
  MapData,
  MapLink,
  MapNode,
  Position,
  SelectedZoneKeyType,
  ZoneLinkApi,
  ZoneStatApi,
} from '../Types';

export function useZonesAdditionalInfo(
  data: { nodes: ZoneStatApi[]; links: ZoneLinkApi[] },
  selectedZoneKey: SelectedZoneKeyType
) {
  const [graphData, setGraphData] = useState<MapData>({
    nodes: [] as MapNode[],
    links: [] as MapLink[],
  });

  useEffect(() => {
    setGraphData((oldData: MapData) => ({
      nodes: getNewNodes(data.nodes, oldData.nodes, selectedZoneKey),
      links: data.links.map((link) => ({
        isActive: !!link.ibcVolume,
        source: link.source,
        target: link.target,
      })),
    }));
  }, [data, selectedZoneKey]);
  return graphData;
}

function getNewNodes(
  nodes: ZoneStatApi[],
  oldNodes: MapNode[],
  selectedZoneKey: SelectedZoneKeyType
): MapNode[] {
  const radiusConst = 100;

  const mapNodes = nodes.map((zone: ZoneStatApi, index: number) =>
    enrichNodeWithVisualProperties(index, zone)
  );

  const sortedNodes = mapNodes.sort(
    (node1, node2) => node1.level - node2.level || node1.zone.localeCompare(node2.zone)
  );

  const nodesWithAnimation = sortedNodes.map((node: MapNode, index: number, arr: MapNode[]) =>
    enrichNodeWithAnimation(arr, node, selectedZoneKey, index, radiusConst, oldNodes)
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
  oldNodes: MapNode[]
) {
  const itemsInLevel = getItemsInLevel(arr.length, node.level);
  const centerCoordinates = getCoordinatesOfCenter();
  const newPos =
    selectedZoneKey === node.zone
      ? centerCoordinates
      : getCoordinatesByLevel(itemsInLevel, index, node.level, radiusConst);

  const oldNode = oldNodes.find((oldNode) => oldNode.zone === node.zone);
  const x = oldNode?.x ?? centerCoordinates.x; // use 0 to show initial animation from center
  const y = oldNode?.y ?? centerCoordinates.y;

  const animatedPos = getAnimationCoordinates(50, newPos.x, newPos.y, x, y);

  return {
    ...node,
    __animatedPos: animatedPos,
    x,
    y,
  } as MapNode;
}

function getAnimationCoordinates(
  iterations: number,
  endX: number,
  endY: number,
  startX: number,
  startY: number
): Position[] {
  const newPosArr = [];
  for (let i = 0; i < iterations - 1; i++) {
    const posX = animationFunction(i + 1, startX, endX, iterations);
    const posY = animationFunction(i + 1, startY, endY, iterations);
    newPosArr.push({ x: posX, y: posY });
  }
  return newPosArr;
}

function animationFunction(index: number, start: number, end: number, iterations: number) {
  return easeInOutQuint(index, start, end - start, iterations);
}

function easeInOutQuint(index: number, start: number, distance: number, count: number) {
  if ((index /= count / 2) < 1) {
    return (distance / 2) * Math.pow(index, 5) + start;
  }
  return (distance / 2) * ((index -= 2) * Math.pow(index, 4) + 2) + start;
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

function getItemsInLevel(size: number, level: number) {
  if (level - 1 < levelLimits.length) {
    return levelLimits[level - 1] - (levelLimits[level - 2] ?? 0);
  }
  return size - levelLimits[levelLimits.length - 1];
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

function getCoordinatesByLevel(
  itemsInLevel: number,
  index: number,
  level: number,
  radiusConst: number
) {
  const angleConst = (2 * Math.PI) / itemsInLevel;
  const offsetAngle = level === 2 ? angleConst / 2 : 0;
  const zoneAngle = index * angleConst + offsetAngle;
  const factor = getRadiusFactor(level, index);
  const r = factor * radiusConst;
  const x = r * Math.cos(zoneAngle);
  const y = r * Math.sin(zoneAngle);
  return { x, y };
}

function getCoordinatesOfCenter() {
  return { x: 0, y: 0 };
}

function getRadiusFactor(level: number, index: number) {
  return level;
  if (level === 1) {
    return 1;
  }
  return index % 2 === 0 ? level * 1.1 : level;
}
