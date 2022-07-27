import { useCallback } from 'react';

import { LinkObject } from 'react-force-graph-2d';

import { HoveredZoneKeyType, Link, SelectedZoneKeyType } from '../Types';

function isLinkRelatedToNode(nodeKey: SelectedZoneKeyType | HoveredZoneKeyType, link: Link) {
  return !!nodeKey && (nodeKey === link.source.zone || nodeKey === link.target.zone);
}

export const useLinkCanvasObject = (
  selectedNodeKey: SelectedZoneKeyType,
  hoveredNodeKey: HoveredZoneKeyType
) =>
  useCallback(
    (value: LinkObject, ctx: CanvasRenderingContext2D, globalScale: number) =>
      drawLinkCanvasObject(value, ctx, globalScale, selectedNodeKey, hoveredNodeKey),
    [selectedNodeKey, hoveredNodeKey]
  );

function drawLinkCanvasObject(
  value: LinkObject,
  ctx: CanvasRenderingContext2D,
  _: number,
  selectedNodeKey: SelectedZoneKeyType,
  hoveredNodeKey: HoveredZoneKeyType
) {
  const link = value as Link;

  if (!link) {
    return;
  }

  const isActiveMode = !!selectedNodeKey || !!hoveredNodeKey;
  const relatedToSelectedZone = isLinkRelatedToNode(selectedNodeKey, link);
  const relatedToHoveredZone = !selectedNodeKey && isLinkRelatedToNode(hoveredNodeKey, link);

  if (isActiveMode && !relatedToSelectedZone && !relatedToHoveredZone) {
    return;
  }

  if (link.source.x && link.source.y && link.target.x && link.target.y) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = relatedToSelectedZone || relatedToHoveredZone ? '#4f4f5a' : '#212129';

    ctx.beginPath();
    ctx.moveTo(link.source.x, link.source.y);
    ctx.lineTo(link.target.x, link.target.y);
    ctx.stroke();
  }
}
