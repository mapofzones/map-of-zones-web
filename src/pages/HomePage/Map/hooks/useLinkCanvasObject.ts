import { useCallback } from 'react';

import { LinkObject } from 'react-force-graph-2d';

import { HoveredZoneKeyType, Link, SelectedZoneKeyType } from '../Types';

const COMET_SPEED = 0.001;
const COMET_LENGTH = 14;
const ACTIVE_LINE_COLOR = '#4f4f5a';
const NORMAL_LINE_COLOR = '#212129';

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
    ctx.strokeStyle = isRalatedToActiveZone ? ACTIVE_LINE_COLOR : NORMAL_LINE_COLOR;

    ctx.beginPath();
    ctx.moveTo(link.source.x, link.source.y);
    ctx.lineTo(link.target.x, link.target.y);
    ctx.stroke();
  }
}

function drawCommet(ctx: CanvasRenderingContext2D, link: any) {
  const { x: sourceX, y: sourceY } = link.source;
  const { x: targetX, y: targetY } = link.target;

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
  commetProgress += COMET_SPEED;

  if (commetProgress >= 1) {
    link.__commet = undefined;
    return;
  }

  calculateAndDrawComet(ctx, targetX, sourceX, targetY, sourceY, commetProgress);

  commet.__progress = commetProgress;
  link.__commet = commet;
}
function calculateAndDrawComet(
  ctx: CanvasRenderingContext2D,
  targetX: number,
  sourceX: number,
  targetY: number,
  sourceY: number,
  commetProgress: number
) {
  const diffX = targetX - sourceX;
  const diffY = targetY - sourceY;
  const distance = Math.sqrt(diffX * diffX + diffY * diffY);

  const endProgress = commetProgress - COMET_LENGTH / distance;
  const cometEndProgress = endProgress > 0 ? endProgress : 0;

  const cometStartX = sourceX + diffX * commetProgress || 0;
  const cometStartY = sourceY + diffY * commetProgress || 0;
  const cometEndX = sourceX + diffX * cometEndProgress || 0;
  const cometEndY = sourceY + diffY * cometEndProgress || 0;

  const gradient = ctx.createLinearGradient(cometStartX, cometStartY, cometEndX, cometEndY);
  gradient.addColorStop(0, '#FFFFFFFF');
  gradient.addColorStop(1, '#FFFFFF00');

  ctx.strokeStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(cometStartX, cometStartY);
  ctx.lineTo(cometEndX, cometEndY);
  ctx.stroke();
}