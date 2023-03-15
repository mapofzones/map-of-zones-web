import { useCallback } from 'react';

import { SelectedZoneKeyType, HoveredZoneKeyType } from './../../Types';
import { getLinkActiveState } from '../../utils/getLinkActiveState';

export function useLinkDirectionalParticles(
  selectedZoneKey: SelectedZoneKeyType,
  hoveredZoneKey: HoveredZoneKeyType
) {
  return useCallback(
    (link: any) => {
      if (!link.isActive) {
        return 0;
      }

      const { isActiveMode, isRalatedToActiveZone } = getLinkActiveState(
        selectedZoneKey,
        hoveredZoneKey,
        link
      );

      if (isActiveMode && !isRalatedToActiveZone) {
        return 0;
      }

      return 1;
    },
    [hoveredZoneKey, selectedZoneKey]
  );
}
