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
  const isRelatedToSelectedZone = isLinkRelatedToNode(selectedNodeKey, link);
  const isRelatedToHoveredZone = !selectedNodeKey && isLinkRelatedToNode(hoveredNodeKey, link);
  const isRalatedToActiveZone = isRelatedToSelectedZone || isRelatedToHoveredZone;

  if (isActiveMode && !isRalatedToActiveZone) {
    return;
  }

  drawLine(ctx, link, isRalatedToActiveZone);

  drawCommet(ctx, link);
}

function drawLine(ctx: CanvasRenderingContext2D, link: Link, isRalatedToActiveZone: boolean) {
  if (link.source.x && link.source.y && link.target.x && link.target.y) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = isRalatedToActiveZone ? '#4f4f5a' : '#212129';

    ctx.beginPath();
    ctx.moveTo(link.source.x, link.source.y);
    ctx.lineTo(link.target.x, link.target.y);
    ctx.stroke();
  }
}

function drawCommet(ctx: CanvasRenderingContext2D, link: any) {
  const commetRadius = 1;
  const commetColor = 'red';
  const particleSpeed = 0.001;
  const { x: sourceX, y: sourceY } = link.source;
  const { x: targetX, y: targetY } = link.target;
  const xLength = targetX - sourceX;
  const yLength = targetY - sourceY;

  if (
    sourceX === undefined ||
    sourceY === undefined ||
    targetX === undefined ||
    targetY === undefined
  ) {
    return;
  }

  const commet = link.__commet || {};

  let commetProgress: number = commet.__progress ?? 0;
  commetProgress += particleSpeed;

  if (commetProgress >= 1) {
    link.__commet = undefined;
    return;
  }

  const commetPosX = sourceX + xLength * commetProgress || 0;
  const commetPosY = sourceY + yLength * commetProgress || 0;
  const tailOffset = commetProgress - 0.1 > 0 ? commetProgress - 0.1 : 0;

  const tailPosX = sourceX + tailOffset * xLength;
  const tailPosY = sourceY + tailOffset * yLength;

  const gradient = ctx.createLinearGradient(commetPosX, commetPosY, tailPosX, tailPosY);
  gradient.addColorStop(0, '#FFFFFFFF');
  gradient.addColorStop(1, '#FFFFFF00');

  ctx.strokeStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(commetPosX, commetPosY);
  ctx.lineTo(tailPosX, tailPosY);
  ctx.stroke();

  commet.__progress = commetProgress;
  link.__commet = commet;
}
