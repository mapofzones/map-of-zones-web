import { useCallback } from 'react';

import { Scene, SpriteMaterial, Sprite, Cache, Texture } from 'three';

import { CanvasesMap } from '../../Types';

export function useNodeThreeObject(
  focusedNodeKey: any,
  focusedNodeNeighbors: Set<string>,
  canvases: CanvasesMap
) {
  return useCallback(
    (node: any) => {
      const scene = new Scene();
      if (focusedNodeKey && focusedNodeKey !== node.zone && !focusedNodeNeighbors.has(node.zone)) {
        return scene;
      }

      Cache.enabled = true;

      const texture = new Texture(canvases[node.zone]);
      texture.needsUpdate = true;
      const material = new SpriteMaterial({ map: texture });
      const sprite = new Sprite(material);
      sprite.scale.set(node.radius, node.radius, node.radius);
      scene.add(sprite);

      return scene;
    },
    [canvases, focusedNodeKey, focusedNodeNeighbors]
  );
}
