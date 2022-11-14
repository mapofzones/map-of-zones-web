import { useCallback } from 'react';

import { Scene } from 'three';
import SpriteText from 'three-spritetext';

export const useNodeThreeObject = (focusedNodeKey: any, focusedNodeNeighbors: any) =>
  useCallback(
    (node: any) => {
      const scene = new Scene();
      const text = new SpriteText(node.name);
      const isFocused =
        focusedNodeKey === node?.id ||
        (focusedNodeNeighbors && focusedNodeNeighbors?.includes(node?.id));

      if (focusedNodeKey && !isFocused) {
        text.color = node.color;
        // text.color = setOpacity(node.color, 0.2);
      } else {
        text.color = node.color;
      }

      scene.add(text);
      scene.position.set(scene.position.x, -10, scene.position.z);

      return scene;
    },
    [focusedNodeKey, focusedNodeNeighbors]
  );
