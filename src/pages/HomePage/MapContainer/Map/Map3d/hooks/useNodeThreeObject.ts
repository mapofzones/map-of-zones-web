import { useCallback } from 'react';

import { Scene, SpriteMaterial, Sprite, Cache, Texture } from 'three';

import { CanvasesMap, SelectedZoneKeyType, HoveredZoneKeyType, MapLink } from '../../Types';
import { isNeighbor } from '../../utils/isNeighbor';

export function useNodeThreeObject(
  selectedZoneKey: SelectedZoneKeyType,
  hoveredZoneKey: HoveredZoneKeyType,
  links: MapLink[],
  canvases: CanvasesMap
) {
  return useCallback(
    (currentNode: any) => {
      const scene = new Scene();
      const isSelectedZone = !!selectedZoneKey && currentNode.zone === selectedZoneKey;
      const isHoveredZone = !!hoveredZoneKey && currentNode.zone === hoveredZoneKey;
      const isFocusedZone = isSelectedZone || isHoveredZone; // SELECTED style -- opacity: border=1 (FF) background=0.1 (1A)
      const isNormal = !selectedZoneKey && !hoveredZoneKey; // NORMAL style -- opacity: border=0.6 (9A) background=0.1 (1A)
      const isSelectedNeighbor = isFocusedZone
        ? false
        : isNeighbor(selectedZoneKey, currentNode.zone, links);

      const isHoveredNeighbor =
        !!selectedZoneKey || isSelectedNeighbor
          ? false
          : isNeighbor(hoveredZoneKey, currentNode.zone, links);
      const isActive = !!isSelectedNeighbor || isHoveredNeighbor; // ACTIVE style -- opacity: border=0.6 (9A) background=0.1 (1A)
      const isFaded = !isNormal && !isFocusedZone && !isActive; // FADED style -- opacity: border=0.2 (33) background=0.05 (0D)

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
