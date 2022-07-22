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
function transformMapData(data: ZonesMapQueryResult | undefined) {
  const nodes: Node[] = [];
  const links: Link[] = [];

  if (!data) {
    return { nodes, links };
  }

  let zonesStats = data.zonesStats;
  const zonesGraphsData = data.zonesGraphs;

  const nodesKeySet = new Set(zonesStats.map((node) => node.zone));

  const zonesGraphs = zonesGraphsData.filter((link) => filterLinksWithoutNodes(link, nodesKeySet));
  zonesStats = JSON.parse(JSON.stringify(zonesStats)); // deep copy
  zonesStats = zonesStats.sort((a, b) => b.ibcVolume - a.ibcVolume);

  const d = {
    nodes: zonesStats as Node[],
    links: JSON.parse(JSON.stringify(zonesGraphs)) as Link[],
  } as GraphData;

  return d;
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

export interface Node extends NodeObject {
  zone: string;
  ibcVolume?: number | null;
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
        linkColor={() => 'rgba(255, 255, 255, 0.1)'}
        graphData={graphData}
        nodeVal={10}
        enableNodeDrag={false}
      />
    </div>
  );
}
