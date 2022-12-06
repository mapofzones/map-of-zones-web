import { useCallback } from 'react';

import { Scene, SpriteMaterial, Sprite, Cache, Texture } from 'three';

import { CanvasesMap, SelectedZoneKeyType } from '../../Types';

export function useNodeThreeObject(
  focusedNodeKey: SelectedZoneKeyType,
  focusedNodeNeighbors: Set<string>,
  canvases: CanvasesMap
) {
  return useCallback(
    (node: any) => {
      const scene = new Scene();
      const isNotActive =
        focusedNodeKey && focusedNodeKey !== node.zone && !focusedNodeNeighbors.has(node.zone);

      Cache.enabled = true;

      const texture = new Texture(canvases[node.zone]);
      texture.needsUpdate = true;
      const material = new SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: isNotActive ? 0.2 : 1,
      });
      const sprite = new Sprite(material);
      sprite.scale.set(node.radius, node.radius, node.radius);
      scene.add(sprite);

      return scene;
    },
    [canvases, focusedNodeKey, focusedNodeNeighbors]
  );
}
