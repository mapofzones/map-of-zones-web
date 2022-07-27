import { useCallback, useState } from 'react';

import { NodeObject } from 'react-force-graph-2d';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { HoveredZoneKeyType, MapNode, SelectedZoneKeyType } from './../Types';

export const useClearSelectedNode = (selectedZoneKey: SelectedZoneKeyType) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return useCallback(() => {
    if (selectedZoneKey) {
      navigate({
        pathname: '',
        search: '?' + searchParams.toString(),
      });
    }
  }, [selectedZoneKey, searchParams, navigate]);
};

export const useHoveredZone = () => {
  const [hoveredZoneKey, setHoveredZoneKey] = useState<HoveredZoneKeyType>(undefined);

  const onZoneHover = useCallback(
    (node: NodeObject | null) => {
      const zone = node as MapNode;
      setHoveredZoneKey(zone?.zone);
    },
    [setHoveredZoneKey]
  );

  return [hoveredZoneKey, onZoneHover] as const;
};

export const useSelectedZone = () => {
  const { zone: selectedZoneKey = undefined } = useParams<string>();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const onZoneClick = useCallback(
    (node: NodeObject) => {
      const zone = node as MapNode;
      navigate({
        pathname: `${zone.zone}/overview`,
        search: '?' + searchParams.toString(),
      });
    },
    [searchParams, navigate]
  );

  return [selectedZoneKey, onZoneClick] as const;
};
