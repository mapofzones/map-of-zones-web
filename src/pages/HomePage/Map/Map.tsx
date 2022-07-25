import { useCallback, useEffect, useRef, useState } from 'react';

import { useQuery } from '@apollo/client';
import ForceGraph2D, { GraphData, LinkObject, NodeObject } from 'react-force-graph-2d';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { PERIODS_IN_HOURS_BY_KEY } from 'components';
import {
  ZonesMapDocument,
  ZonesMapQueryResult,
} from 'graphql/HomePage/Map/__generated__/ZonesMap.generated';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import styles from './Map.module.scss';
import { useNodeCanvasObject } from './useNodeCanvasObject';

export interface Link extends LinkObject {
  source: MapNode;
  target: MapNode;
  ibcVolume?: number | null;
}

export interface MapNode extends NodeObject {
  zone: string;
  isMainnet: boolean;
  logoUrl?: string | null;
  name: string;
  ibcVolume?: number | null;
  ibcVolumeIn?: number | null;
  ibcVolumeOut?: number | null;
  level: number;
  radius: number;
  logoRadius?: number;
  color: string;
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
  const nodes: MapNode[] = [];
  const links: Link[] = [];

  if (!data) {
    return { nodes, links };
  }

  let zonesStats: ZoneStat[] = JSON.parse(JSON.stringify(data.zonesStats));
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

    const node: MapNode = {
      ...zone,
      level,
      x,
      y,
      radius,
      logoRadius,
      color,
    } as MapNode;
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
  ibcVolume: number | null;
  ibcVolumeIn: number | null;
  ibcVolumeOut: number | null;
  isMainnet: boolean;
  logoUrl?: string | null;
  name: string;
}

export function Map() {
  const [hoveredZoneKey, setHoveredZoneKey] = useState<string | undefined>(undefined);

  const [selectedPeriod] = useSelectedPeriod();

  const { zone: selectedZoneKey = '' } = useParams();

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] });

  const options = {
    variables: {
      period: PERIODS_IN_HOURS_BY_KEY[selectedPeriod],
      isMainnet: true,
    },
  };

  const { data, loading } = useQuery(ZonesMapDocument, {
    ...options,
    fetchPolicy: 'network-only',
    onCompleted: (data: ZonesMapQueryResult) => {
      const newData = transformMapData(data);
      console.log('on complete', graphData, newData);
      setGraphData(newData);
    },
  });

  const graphRef = useRef<any>();

  useEffect(() => {
    const fg = graphRef.current;
    fg.d3Force('link', null);
    fg.d3Force('charge').strength(-10);
  }, []);

  const nodeCanvasObject = useNodeCanvasObject(
    selectedZoneKey,
    hoveredZoneKey,
    graphData.links as Link[]
  );

  const onZoomClick = useCallback(() => {
    graphRef.current.zoom(2, 1000);
  }, []);

  const onNodeClick = useCallback(
    (node: NodeObject) => {
      const zone = node as MapNode;
      navigate({
        pathname: `${zone.zone}/overview`,
        search: '?' + searchParams.toString(),
      });
    },
    [searchParams, navigate]
  );

  const onNodeHover = useCallback(
    (node: NodeObject | null) => {
      const zone = node as MapNode;
      setHoveredZoneKey(zone?.zone);
    },
    [setHoveredZoneKey]
  );

  const clearSelectedNode = useCallback(() => {
    if (selectedZoneKey) {
      navigate({
        pathname: '',
        search: '?' + searchParams.toString(),
      });
    }
  }, [selectedZoneKey, searchParams, navigate]);

  return (
    <div className={styles.container}>
      <ForceGraph2D
        ref={graphRef}
        nodeId="zone"
        height={document.documentElement.clientHeight}
        width={document.documentElement.clientWidth - 360}
        linkColor={useCallback(() => '#212129', [])}
        graphData={graphData}
        nodeCanvasObject={nodeCanvasObject}
        onNodeClick={onNodeClick}
        onNodeHover={onNodeHover}
        onLinkClick={clearSelectedNode}
        onBackgroundClick={clearSelectedNode}
        cooldownTime={Infinity}
        nodeVal={useCallback((data: any) => {
          const zone = data as MapNode;
          return zone.radius * 2;
        }, [])}
        enableZoomInteraction={false}
        enableNodeDrag={false}
      />
      <button onClick={onZoomClick}>Zoom in</button>
    </div>
  );
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

function getZoneColor(valueIn: number | null, valueOut: number | null) {
  return valueOut === null || valueIn === null || valueIn === valueOut
    ? '#ffffff'
    : valueOut > valueIn
    ? '#ee11cc'
    : '#22aaff';
}
