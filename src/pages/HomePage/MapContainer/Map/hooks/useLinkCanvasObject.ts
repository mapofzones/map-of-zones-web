import { useCallback } from 'react';

import { LinkObject } from 'react-force-graph-2d';

import { HoveredZoneKeyType, MapLink, SelectedZoneKeyType } from '../Types';
import { getLinkActiveState } from '../utils/getLinkActiveState';

const COMET_SPEED = 0.001;
const COMET_LENGTH = 14;
const ACTIVE_LINE_COLOR = '#ffffff64';
const NORMAL_LINE_COLOR = '#ffffff1E';

export const useLinkCanvasObject = (
  selectedNodeKey: SelectedZoneKeyType,
  hoveredNodeKey: HoveredZoneKeyType
) =>
  useCallback(
    (value: LinkObject, ctx: CanvasRenderingContext2D, globalScale: number) =>
      drawLinkCanvasObject(value as MapLink, ctx, globalScale, selectedNodeKey, hoveredNodeKey),
    [selectedNodeKey, hoveredNodeKey]
  );

function drawLinkCanvasObject(
  link: MapLink,
  ctx: CanvasRenderingContext2D,
  scale: number,
  selectedNodeKey: SelectedZoneKeyType,
  hoveredNodeKey: HoveredZoneKeyType
) {
  if (!link) {
    return;
  }

  const { isActiveMode, isRalatedToActiveZone } = getLinkActiveState(
    selectedNodeKey,
    hoveredNodeKey,
    link
  );

  if (isActiveMode && !isRalatedToActiveZone) {
    return;
  }

  drawLine(ctx, link, isRalatedToActiveZone, scale);

  if (link.isActive) {
    drawCommet(ctx, link);
  }
}

function drawLine(
  ctx: CanvasRenderingContext2D,
  link: MapLink,
  isRalatedToActiveZone: boolean,
  scale: number
) {
  if (typeof link.source === 'string' || typeof link.target === 'string') {
    return;
  }

  if (
    link.source.x != null &&
    link.source.y != null &&
    link.target.x != null &&
    link.target.y != null
  ) {
    ctx.lineWidth = 0.5 / scale;
    ctx.strokeStyle = isRalatedToActiveZone ? ACTIVE_LINE_COLOR : NORMAL_LINE_COLOR;

    ctx.beginPath();
    ctx.moveTo(link.source.x, link.source.y);
    ctx.lineTo(link.target.x, link.target.y);
    ctx.stroke();
  }
}

function drawCommet(ctx: CanvasRenderingContext2D, link: MapLink) {
  if (typeof link.source === 'string' || typeof link.target === 'string') {
    return;
  }

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

  const comet = link.__comet || { __progress: 0 };

  comet.__progress += COMET_SPEED;

  if (comet.__progress >= 1) {
    link.__comet = undefined;
    return;
  }

  calculateAndDrawComet(ctx, targetX, sourceX, targetY, sourceY, comet.__progress);

  link.__comet = comet;
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
