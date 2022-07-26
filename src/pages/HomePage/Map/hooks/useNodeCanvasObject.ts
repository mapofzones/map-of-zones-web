import { useCallback } from 'react';

import { NodeObject } from 'react-force-graph-2d';

import { Link, MapNode } from '../Map';
import { HoveredZoneKeyType, SelectedZoneKeyType } from '../Types';

function isNeighbor(activeZoneKey: string, currentZoneKey: string, links: Link[]) {
  return links.some(
    (link) =>
      (link.source.zone === activeZoneKey && link.target.zone === currentZoneKey) ||
      (link.source.zone === currentZoneKey && link.target.zone === activeZoneKey)
  );
}

export const useNodeCanvasObject = (
  selectedZoneKey: SelectedZoneKeyType,
  hoveredZoneKey: HoveredZoneKeyType,
  links: Link[]
) =>
  useCallback(
    (node: NodeObject, ctx: CanvasRenderingContext2D, _globalScale: number) => {
      const currentNode = node as MapNode;

      const isSelectedZone = selectedZoneKey && currentNode.zone === selectedZoneKey;
      const isHoveredZone = !!hoveredZoneKey && currentNode.zone === hoveredZoneKey;
      const isFocusedZone = isSelectedZone || isHoveredZone; // SELECTED style -- opacity: border=1 (FF) background=0.1 (1A)
      const isNormal = !selectedZoneKey && !hoveredZoneKey; // NORMAL style -- opacity: border=0.6 (9A) background=0.1 (1A)
      const isSelectedNeighbor = isFocusedZone
        ? false
        : isNeighbor(selectedZoneKey, currentNode.zone, links);

      const isHoveredNeighbor =
        !!selectedZoneKey || isSelectedNeighbor
          ? false
          : hoveredZoneKey && isNeighbor(hoveredZoneKey, currentNode.zone, links);

      const isActive = isSelectedNeighbor || isHoveredNeighbor; // ACTIVE style -- opacity: border=0.6 (9A) background=0.1 (1A)
      const isFaded = !isNormal && !isFocusedZone && !isActive; // FADED style -- opacity: border=0.2 (33) background=0.05 (0D)

      if (currentNode && currentNode.x && currentNode.y) {
        const fillStyleOpecity = isFaded ? '0D' : '1A';
        const borderStyleOpacity = isFaded ? '33' : isFocusedZone ? 'FF' : '9A';
        if (currentNode.color) {
          ctx.strokeStyle = `${currentNode.color}${borderStyleOpacity}`;
          ctx.fillStyle = `${currentNode.color}${fillStyleOpecity}`;
          ctx.beginPath();
          ctx.lineWidth = 1;
          ctx.arc(currentNode.x, currentNode.y, currentNode.radius, 0, 2 * Math.PI, false);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
        }

        if (currentNode.logoUrl && currentNode.logoRadius) {
          if (isFaded) {
            ctx.globalAlpha = 0.2;
          }
          const img = new Image();
          img.src = currentNode.logoUrl;
          ctx.drawImage(
            img,
            currentNode.x - currentNode.logoRadius,
            currentNode.y - currentNode.logoRadius,
            currentNode.logoRadius * 2,
            currentNode.logoRadius * 2
          );
          if (isFaded) {
            ctx.globalAlpha = 1;
          }
        }
      }
    },
    [hoveredZoneKey, selectedZoneKey, links]
  );
