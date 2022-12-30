import { useCallback } from 'react';

import { Scene, BufferGeometry, LineBasicMaterial, Line, Vector3 } from 'three';

import { getLinkActiveState } from '../../utils/getLinkActiveState';
import { HoveredZoneKeyType, SelectedZoneKeyType } from './../../Types';

export function useLinkThreeObject(
  selectedZoneKey: SelectedZoneKeyType,
  hoveredZoneKey: HoveredZoneKeyType
) {
  return useCallback(
    (link: any) => {
      const scene = new Scene();

      const { isActiveMode, isRalatedToActiveZone } = getLinkActiveState(
        selectedZoneKey,
        hoveredZoneKey,
        link
      );

      if (isActiveMode && !isRalatedToActiveZone) {
        return scene;
      }

      const line = createLinkLine(link, isRalatedToActiveZone);
      scene.add(line);

      return scene;
    },
    [hoveredZoneKey, selectedZoneKey]
  );
}

function createLinkLine(link: any, isRalatedToActiveZone: boolean) {
  const lineMaterial = new LineBasicMaterial({
    color: '#ffffff',
    opacity: isRalatedToActiveZone ? 0.25 : 0.12,
    transparent: true,
  });
  const points = [];
  points.push(new Vector3(link.source.x, link.source.y, link.source.z));
  points.push(new Vector3(link.target.x, link.target.y, link.target.z));

  const geometry = new BufferGeometry().setFromPoints(points);
  const line = new Line(geometry, lineMaterial);
  return line;
}
