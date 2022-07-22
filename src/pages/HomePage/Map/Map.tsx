import { useEffect, useRef, useState } from 'react';

import { useQuery } from '@apollo/client';
import ForceGraph2D, { GraphData, LinkObject, NodeObject } from 'react-force-graph-2d';

import {
  ZonesMapDocument,
  ZonesMapQueryResult,
} from 'graphql/HomePage/Map/__generated__/ZonesMap.generated';

import styles from './Map.module.scss';

export interface Link extends LinkObject {
  source: string;
  target: string;
  ibcVolume?: number | null;
}

export interface Node extends NodeObject {
  zone: string;
  ibcVolume?: number | null;
  isMainnet: boolean;
  logoUrl?: string | null;
  name: string;
}

export interface ZoneLink {
  __typename?: 'zones_graphs';
  source: string;
  target: string;
  ibcVolume?: any | null;
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

function transformMapData(data: ZonesMapQueryResult | undefined) {
  const nodes: Node[] = [];
  const links: Link[] = [];

  if (!data) {
    return { nodes, links };
  }

  let zonesStats: ZoneStat[] = JSON.parse(JSON.stringify(data.zonesStats));
  const zonesGraphsData: ZoneLink[] = JSON.parse(JSON.stringify(data.zonesGraphs));

  zonesStats = zonesStats.sort((a, b) => b.ibcVolume - a.ibcVolume);

  const nodesKeySet = new Set(zonesStats.map((node) => node.zone));

  const zonesGraphs = zonesGraphsData.filter((link) => filterLinksWithoutNodes(link, nodesKeySet));

  const radiusConst = 100;

  zonesStats.forEach((zone: ZoneStat, index: number, arr: ZoneStat[]) => {
    const level = getLevel(index);
    const itemsInLevel = getItemsInLevel(index, arr.length);
    const { x, y } = getCoordinates(itemsInLevel, index, level, radiusConst);

    const node: Node = {
      ...zone,
      level,
      x,
      y,
    } as Node;
    nodes.push(node);
  });

  const d = {
    nodes,
    links: JSON.parse(JSON.stringify(zonesGraphs)) as Link[],
  } as GraphData;

  return d;
}

function getCoordinates(itemsInLevel: number, index: number, level: number, radiusConst: number) {
  const angleConst = (2 * Math.PI) / itemsInLevel;
  const zoneAngle = index * angleConst;

  const r = level * radiusConst;
  const x = r * Math.cos(zoneAngle);
  const y = r * Math.sin(zoneAngle);
  return { x, y };
}

function filterLinksWithoutNodes(link: any, nodesSet: Set<string>) {
  const hasSource = nodesSet.has(link.source);
  const hasTarget = nodesSet.has(link.target);

  if (!hasSource || !hasTarget) {
    const ids =
      !hasSource && !hasTarget
        ? `${link.source}, ${link.target}`
        : !hasSource
        ? link.source
        : link.target;

    const msg = `There is no nodes (${ids}) for link ${link.source}->${link.target}`;
    // console.error(msg);

    return false;
  }
  return true;
}

export interface ZoneStat {
  __typename?: 'zones_stats';
  zone: string;
  ibcVolume?: any | null;
  isMainnet: boolean;
  logoUrl?: string | null;
  name: string;
}

export function Map() {
  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] });

  const options = {
    variables: {
      period: 24,
      isMainnet: true,
    },
  };

  const { data, loading } = useQuery(ZonesMapDocument, {
    ...options,
    onCompleted: (data: ZonesMapQueryResult) => {
      console.log('on complete');
      const graphData = transformMapData(data);
      setGraphData(graphData);
    },
  });
  console.log('Map');

  const graphRef = useRef<any>();

  useEffect(() => {
    const fg = graphRef.current;

    // links
    fg.d3Force('link', null);

    // charge
    fg.d3Force('charge').strength(-10);
  }, []);

  return (
    <div className={styles.container}>
      <ForceGraph2D
        ref={graphRef}
        nodeId="zone"
        height={document.documentElement.clientHeight}
        width={document.documentElement.clientWidth - 360}
        linkColor={() => '#212129'}
        graphData={graphData}
        nodeVal={10}
        enableNodeDrag={false}
      />
    </div>
  );
}
