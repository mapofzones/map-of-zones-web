import { useCallback, useState } from 'react';

import { NodeObject } from 'react-force-graph-2d';
import { useParams } from 'react-router-dom';

import {
  SelectedZoneSourceView,
  useHomePageSelectedZoneAnalytics,
} from 'hooks/analytics/HomePage/useHomePageSelectedZoneAnalytics';
import { useNavigateWithSearchParams } from 'hooks/useNavigateWithSearchParams';

import { HoveredZoneKeyType, MapNode, SelectedZoneKeyType } from './../Types';

export const useClearSelectedNode = (selectedZoneKey: SelectedZoneKeyType) => {
  const navigateWithSearchParams = useNavigateWithSearchParams();

  return useCallback(() => {
    if (selectedZoneKey) {
      navigateWithSearchParams('');
    }
  }, [selectedZoneKey, navigateWithSearchParams]);
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

  const navigateWithSearchParams = useNavigateWithSearchParams();
  const trackSelectedZone = useHomePageSelectedZoneAnalytics(SelectedZoneSourceView.Map);

  const onZoneClick = useCallback(
    (node: NodeObject) => {
      const zone = node as MapNode;
      navigateWithSearchParams(`${zone.zone}/overview`, {
        state: { source: SelectedZoneSourceView.Map },
      });
      trackSelectedZone(zone.zone);
    },
    [navigateWithSearchParams, trackSelectedZone]
  );

  return [selectedZoneKey, onZoneClick] as const;
};
