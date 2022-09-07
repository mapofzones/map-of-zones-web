import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { GraphData } from 'react-force-graph-2d';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import {
  ZonesMapDocument,
  ZonesMapQueryResult,
} from 'graphql/v2/HomePage/__generated__/ZonesMap.query.generated';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import { Link, MapNode, ZoneLink, ZoneStat } from '../Types';

export const useGraphData = () => {
  const [selectedPeriod] = useSelectedPeriod();

  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] });
  const options = {
    variables: {
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: true,
    },
  };

  const { data, loading } = useQuery(ZonesMapDocument, options);

  useEffect(() => {
    const newData = transformMapData(data);
    setGraphData(newData);
  }, [data]);

  return { graphData, loading };
};

function transformMapData(data: ZonesMapQueryResult | undefined) {
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

  zonesStats = zonesStats.sort((a, b) =>
    a.ibcVolume === null ? -1 : b.ibcVolume === null ? 1 : b.ibcVolume - a.ibcVolume
  );

  const nodesKeySet = new Set(zonesStats.map((node) => node.zone));

  const zonesGraphs = zonesGraphsData.filter((link) => filterLinksWithoutNodes(link, nodesKeySet));

  const radiusConst = 100;

  zonesStats.forEach((zone: ZoneStat, index: number, arr: ZoneStat[]) => {
    const level = getLevel(index);
    const itemsInLevel = getItemsInLevel(index, arr.length);
    const { x, y } = getCoordinates(itemsInLevel, index, level, radiusConst);
    const radius = getZoneRadius(level);
    const logoRadius = getZoneLogoRadius(level);
    const color = getZoneColor(zone.ibcVolumeIn, zone.ibcVolumeOut);
    const fontSize = getFontSize(level);

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
    links: JSON.parse(JSON.stringify(zonesGraphs)) as Link[],
  } as GraphData;

  return d;
}

function getZoneRadius(level: number) {
  if (level === 1) {
    return 25;
  } else if (level === 2) {
    return 14;
  }
  return 5;
}

function getZoneLogoRadius(level: number) {
  if (level === 1) {
    return 18;
  } else if (level === 2) {
    return 8;
  }
  return undefined;
}

function getFontSize(level: number) {
  if (level === 1) {
    return 11;
  } else if (level === 2) {
    return 10;
  }
  return 8;
}

function getZoneColor(valueIn: number | null, valueOut: number | null) {
  return valueOut === null || valueIn === null || valueIn === valueOut
    ? '#ffffff'
    : valueOut > valueIn
    ? '#ee11cc'
    : '#22aaff';
}

const getLevel = (index: number) => {
  if (index < 10) {
    return 1;
  } else if (index < 30) {
    return 2;
  }
  return 3;
};

const getItemsInLevel = (index: number, size: number) => {
  if (index < 10) {
    return Math.min(10, size);
  } else if (index < 30) {
    return Math.min(20, size - 10);
  }
  return size - 30;
};

function getCoordinates(itemsInLevel: number, index: number, level: number, radiusConst: number) {
  const angleConst = (2 * Math.PI) / itemsInLevel;
  const zoneAngle = index * angleConst;

  const r = level * radiusConst;
  const x = r * Math.cos(zoneAngle);
  const y = r * Math.sin(zoneAngle);
  return { x, y };
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
