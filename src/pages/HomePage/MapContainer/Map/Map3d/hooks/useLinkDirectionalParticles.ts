import { useCallback } from 'react';

import { getZoneKey, SelectedZoneKeyType } from './../../Types';

export function useLinkDirectionalParticles(selectedZoneKey: SelectedZoneKeyType) {
  return useCallback(
    (link: any) => {
      if (!link.isActive) {
        return 0;
      }

      if (
        selectedZoneKey &&
        selectedZoneKey !== getZoneKey(link.source) &&
        selectedZoneKey !== getZoneKey(link.target)
      ) {
        return 0;
      }

      return 1;
    },
    [selectedZoneKey]
  );
}
