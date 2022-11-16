import { useCallback } from 'react';

import { Scene, BufferGeometry, LineBasicMaterial, Line, Vector3 } from 'three';

import { getZoneKey } from '../../Types';

export function useLinkThreeObject(focusedNodeKey: any) {
  return useCallback(
    (link: any) => {
      const scene = new Scene();

      if (
        focusedNodeKey &&
        focusedNodeKey !== getZoneKey(link.source) &&
        focusedNodeKey !== getZoneKey(link.target)
      ) {
        return scene;
      }

      const line = createLinkLine(link);
      scene.add(line);

      return scene;
    },
    [focusedNodeKey]
  );
}

function createLinkLine(link: any) {
  const lineMaterial = new LineBasicMaterial({
    color: '#ffffff',
    opacity: 0.1,
    transparent: true,
  });
  const points = [];
  points.push(new Vector3(link.source.x, link.source.y, link.source.z));
  points.push(new Vector3(link.target.x, link.target.y, link.target.z));

  const geometry = new BufferGeometry().setFromPoints(points);
  const line = new Line(geometry, lineMaterial);
  return line;
}
