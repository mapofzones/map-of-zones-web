import { useCallback } from 'react';

import { NodeObject } from 'react-force-graph-2d';

import { HoveredZoneKeyType, Link, MapNode, SelectedZoneKeyType } from '../Types';

const TEXT_PADDING_TOP = 3;
const FONT_WEIGHT = 400;

function isNeighbor(
  activeZoneKey: string | undefined,
  currentZoneKey: string,
  links: Link[]
): boolean {
  return (
    !!activeZoneKey &&
    links.some(
      (link) =>
        (link.source.zone === activeZoneKey && link.target.zone === currentZoneKey) ||
        (link.source.zone === currentZoneKey && link.target.zone === activeZoneKey)
    )
  );
}

export const useNodeCanvasObject = (
  selectedZoneKey: SelectedZoneKeyType,
  hoveredZoneKey: HoveredZoneKeyType,
  links: Link[]
) =>
  useCallback(
    (node: NodeObject, ctx: CanvasRenderingContext2D, globalScale: number): void =>
      drawNodeCanvasObject(node, ctx, globalScale, selectedZoneKey, hoveredZoneKey, links),
    [hoveredZoneKey, selectedZoneKey, links]
  );

function drawNodeCanvasObject(
  node: NodeObject,
  ctx: CanvasRenderingContext2D,
  _: number,
  selectedZoneKey: SelectedZoneKeyType,
  hoveredZoneKey: HoveredZoneKeyType,
  links: Link[]
): void {
  const currentNode = node as MapNode;
  if (!currentNode || currentNode.x === undefined || currentNode.y === undefined) {
    return;
  }

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
      : isNeighbor(hoveredZoneKey, currentNode.zone, links);

  const isActive = !!isSelectedNeighbor || isHoveredNeighbor; // ACTIVE style -- opacity: border=0.6 (9A) background=0.1 (1A)
  const isFaded = !isNormal && !isFocusedZone && !isActive; // FADED style -- opacity: border=0.2 (33) background=0.05 (0D)

  drawNode(ctx, currentNode, isFaded, isFocusedZone);

  drawTitle(ctx, currentNode, isFaded, isNormal);
}

function drawNode(
  ctx: CanvasRenderingContext2D,
  currentNode: MapNode,
  isFaded: boolean,
  isFocusedZone: boolean
) {
  const { x, y, radius, color, logoUrl, logoRadius } = currentNode;
  if (x === undefined || y === undefined) {
    return;
  }

  const fillStyleOpecity = isFaded ? '0D' : '1A';
  const borderStyleOpacity = isFaded ? '33' : isFocusedZone ? 'FF' : '9A';
  if (color) {
    ctx.strokeStyle = `${color}${borderStyleOpacity}`;
    ctx.fillStyle = `${color}${fillStyleOpecity}`;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  if (logoUrl && logoRadius) {
    if (isFaded) {
      ctx.globalAlpha = 0.2;
    }
    const img = new Image();
    img.src = logoUrl;
    ctx.drawImage(img, x - logoRadius, y - logoRadius, logoRadius * 2, logoRadius * 2);
    if (isFaded) {
      ctx.globalAlpha = 1;
    }
  }
}

function drawTitle(
  ctx: CanvasRenderingContext2D,
  currentNode: MapNode,
  isFaded: boolean,
  isNormal: boolean
) {
  const { x, y, radius, name, fontSize } = currentNode;
  if (x === undefined || y === undefined) {
    return;
  }

  const deltaY = radius + fontSize / 2 + TEXT_PADDING_TOP;
  const textColor = isFaded ? '#33333D' : isNormal ? '#9F9FA5' : '#FFFFFF';

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `${FONT_WEIGHT} ${fontSize}px Roboto`;
  ctx.fillStyle = textColor;
  ctx.fillText(name, x, y + deltaY);
}
