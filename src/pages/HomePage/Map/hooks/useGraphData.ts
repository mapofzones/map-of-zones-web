import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { GraphData } from 'react-force-graph-2d';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import {
  ZonesMapDocument,
  ZonesMapQueryResult,
} from 'graphql/v2/HomePage/__generated__/ZonesMap.query.generated';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { SortRow } from 'hooks/useSortedTableData';
import { ColumnKeys } from 'pages/HomePage/Types';

import { Link, MapNode, ZoneLink, ZoneStat } from '../Types';

const sortingKeyByColumnKey: Record<ColumnKeys, keyof ZoneStat> = {
  [ColumnKeys.IbcVolume]: 'ibcVolumeRating',
  [ColumnKeys.IbcTransfers]: 'ibcTransfersRating',
  [ColumnKeys.TotalTxs]: 'totalTxsRating',
  [ColumnKeys.Dau]: 'dauRating',
};

export const useGraphData = () => {
  const [selectedPeriod] = useSelectedPeriod();
  const [selectedColumnKey] = useDefaultSearchParam<ColumnKeys>('columnKey');

  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] });
  const options = {
    variables: {
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: true,
    },
  };

  const { data, loading } = useQuery(ZonesMapDocument, options);

  useEffect(() => {
    const newData = transformMapData(data, sortingKeyByColumnKey[selectedColumnKey]);
    setGraphData(newData);
  }, [data, selectedColumnKey]);

  return { graphData, loading };
};

function transformMapData(data: ZonesMapQueryResult | undefined, columnKey: keyof ZoneStat) {
  const nodes: MapNode[] = [];
  const links: Link[] = [];

  if (!data) {
    return { nodes, links };
  }

  let zonesStats: ZoneStat[] = data.zonesStats.map((zoneStat) => ({
    ...zoneStat,
    ...zoneStat.switchedStats[0],
  }));
  const zonesGraphsData: ZoneLink[] = JSON.parse(JSON.stringify(data.zonesGraphs));

  zonesStats = zonesStats.sort((a, b) => SortRow(a, b, columnKey, 'asc'));

  const nodesKeySet = new Set(zonesStats.map((node) => node.zone));

  const zonesGraphs = zonesGraphsData.filter((link) => filterLinksWithoutNodes(link, nodesKeySet));

  const radiusConst = 100;

  zonesStats.forEach((zone: ZoneStat, index: number, arr: ZoneStat[]) => {
    const level = getLevel(index);
    const itemsInLevel = getItemsInLevel(arr.length, level);
    const { x, y } = getCoordinates(itemsInLevel, index, level, radiusConst);
    const radius = getZoneRadiusByLevel(level);
    const logoRadius = getZoneLogoRadiusByLevel(level);
    const color = getZoneColor(zone.ibcVolumeIn, zone.ibcVolumeOut);
    const fontSize = getFontSizeByLevel(level);

    const node: MapNode = {
      ...zone,
      level,
      x,
      y,
      radius,
      logoRadius,
      color,
      fontSize,
    } as MapNode;
    nodes.push(node);
  });

  const d = {
    nodes,
    links: JSON.parse(JSON.stringify(zonesGraphs)).map((link: Link) => ({
      ...link,
      isActive: !!link.ibcVolume,
    })) as Link[],
  } as GraphData;

  return d;
}

const levelLimits = [10, 30];
const zoneRadiuses = [25, 16, 11.5];
const zoneLogoRadiuses = [18, 10, 6.5];
const fontSizes = [11, 10, 8];

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

function getCoordinates(itemsInLevel: number, index: number, level: number, radiusConst: number) {
  const angleConst = (2 * Math.PI) / itemsInLevel;
  const offsetAngle = level === 2 ? angleConst / 2 : 0;
  const zoneAngle = index * angleConst + offsetAngle;
  const factor = getRadiusFactor(level, index);
  const r = factor * radiusConst;
  const x = r * Math.cos(zoneAngle);
  const y = r * Math.sin(zoneAngle);
  return { x, y };
}

function getRadiusFactor(level: number, index: number) {
  return level;
  if (level === 1) {
    return 1;
  }
  return index % 2 === 0 ? level * 1.1 : level;
}

function filterLinksWithoutNodes(link: ZoneLink, nodesSet: Set<string>) {
  const hasSource = nodesSet.has(link.source);
  const hasTarget = nodesSet.has(link.target);

  if (!hasSource || !hasTarget) {
    return false;

    const ids =
      !hasSource && !hasTarget
        ? `${link.source}, ${link.target}`
        : !hasSource
        ? link.source
        : link.target;

    const msg = `There is no nodes (${ids}) for link ${link.source}->${link.target}`;
    console.error(msg);

    return false;
  }
  return true;
}
