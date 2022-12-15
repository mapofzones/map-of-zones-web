import { useCallback } from 'react';

import { Scene, BufferGeometry, LineBasicMaterial, Line, Vector3 } from 'three';

import { isLinkRelatedToNode } from '../../hooks/useLinkCanvasObject';
import { HoveredZoneKeyType, SelectedZoneKeyType } from './../../Types';

export function useLinkThreeObject(
  selectedZoneKey: SelectedZoneKeyType,
  hoveredZoneKey: HoveredZoneKeyType
) {
  return useCallback(
    (link: any) => {
      const scene = new Scene();

      const isActiveMode = !!selectedZoneKey || !!hoveredZoneKey;
      const isRelatedToSelectedZone = isLinkRelatedToNode(selectedZoneKey, link);
      const isRelatedToHoveredZone = !selectedZoneKey && isLinkRelatedToNode(hoveredZoneKey, link);
      const isRalatedToActiveZone = isRelatedToSelectedZone || isRelatedToHoveredZone;

      if (isActiveMode && !isRalatedToActiveZone) {
        return scene;
      }

      // if (
      //   focusedNodeKey &&
      //   focusedNodeKey !== getZoneKey(link.source) &&
      //   focusedNodeKey !== getZoneKey(link.target)
      // ) {
      //   return scene;
      // }

      const line = createLinkLine(link);
      scene.add(line);

      return scene;
    },
    [hoveredZoneKey, selectedZoneKey]
  );
}

function createLinkLine(link: any) {
  const lineMaterial = new LineBasicMaterial({
    color: '#ffffff',
    opacity: 0.12,
    transparent: true,
  });
  const points = [];
  points.push(new Vector3(link.source.x, link.source.y, link.source.z));
  points.push(new Vector3(link.target.x, link.target.y, link.target.z));

  const geometry = new BufferGeometry().setFromPoints(points);
  const line = new Line(geometry, lineMaterial);
  return line;
}
