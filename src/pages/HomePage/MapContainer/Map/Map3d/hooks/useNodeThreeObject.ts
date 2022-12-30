import { useCallback } from 'react';

import { Scene, SpriteMaterial, Sprite, Cache, Texture } from 'three';

import { CanvasesMap, SelectedZoneKeyType, HoveredZoneKeyType, MapLink } from '../../Types';
import { getNodeActiveState } from '../../utils/getNodeActiveState';

export function useNodeThreeObject(
  selectedZoneKey: SelectedZoneKeyType,
  hoveredZoneKey: HoveredZoneKeyType,
  links: MapLink[],
  canvases: CanvasesMap
) {
  return useCallback(
    (currentNode: any) => {
      const scene = new Scene();

      const { isFaded } = getNodeActiveState(selectedZoneKey, currentNode, hoveredZoneKey, links);

      Cache.enabled = true;

      const texture = new Texture(canvases[currentNode.zone]);
      texture.needsUpdate = true;
      const material = new SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: isFaded ? 0.1 : 1,
      });
      const sprite = new Sprite(material);
      const factor = currentNode.radius / texture.image.height;
      sprite.scale.set(texture.image.width * factor, currentNode.radius, 1);
      scene.add(sprite);

      return scene;
    },
    [canvases, hoveredZoneKey, links, selectedZoneKey]
  );
}
