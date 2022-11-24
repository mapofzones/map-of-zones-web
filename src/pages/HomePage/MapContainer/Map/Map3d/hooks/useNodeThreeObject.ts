import { useCallback } from 'react';

import THREE, {
  Scene,
  SphereGeometry,
  MeshLambertMaterial,
  Mesh,
  Group,
  TextureLoader,
  SpriteMaterial,
  Sprite,
  Cache,
} from 'three';
import SpriteText from 'three-spritetext';

export function useNodeThreeObject(focusedNodeKey: any, focusedNodeNeighbors: Set<string>) {
  return useCallback(
    (node: any) => {
      const scene = new Scene();
      if (focusedNodeKey && focusedNodeKey !== node.zone && !focusedNodeNeighbors.has(node.zone)) {
        return scene;
      }

      // const sphereGeometry = new SphereGeometry(node.radius, 20, 20);
      // const sphereMaterial = new MeshLambertMaterial({
      //   color: node.color,
      //   opacity: 0.7,
      //   transparent: true,
      // });
      // const sphere = new Mesh(sphereGeometry, sphereMaterial);
      // scene.add(sphere);
      Cache.enabled = true;
      const logoRadiusWithScale = 25;
      const map = new TextureLoader().load(node.logoUrl);
      const material = new SpriteMaterial({ map: map, color: 0xffffff });
      const sprite = new Sprite(material);
      sprite.scale.set(logoRadiusWithScale, logoRadiusWithScale, logoRadiusWithScale);
      scene.add(sprite);

      const text = new SpriteText(node.name);
      text.color = node.color;
      text.position.set(scene.position.x, 20, scene.position.z);
      scene.add(text);

      return scene;
    },
    [focusedNodeKey, focusedNodeNeighbors]
  );
}
