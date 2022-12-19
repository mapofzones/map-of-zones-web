import textureSphere2Src from 'assets/texture-sphere-2.png';
import textureSphereSrc from 'assets/texture-sphere.png';

import { ImagesMap } from '../../Types';

export function drawNode3d(node: any, images: ImagesMap) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const qualityMultiply = 3;
  const radius = node.radius * qualityMultiply;
  const fontSize = node.fontSize * qualityMultiply;

  if (!ctx) {
    return canvas;
  }

  ctx.font = `${400} ${fontSize}px Roboto`;

  const textMetrics = ctx.measureText(node.name);
  const textWidth = textMetrics.width;
  const width = Math.max(radius * 2, textWidth);
  canvas.width = width;

  const height = radius * 2 + fontSize;
  canvas.height = height;

  const circle = { x: width / 2, y: radius, r: radius };

  ctx.beginPath();
  ctx.lineWidth = 7;
  ctx.strokeStyle = node.color;
  ctx.arc(circle.x, circle.y, circle.r * 0.9, 0, 2 * Math.PI, false);
  ctx.closePath();
  ctx.stroke();

  circle.r *= 0.87;
  if (images[node.logoUrl]) {
    ctx.globalCompositeOperation = 'source-over';
    const borderR = node.radius * 0.2;
    ctx.drawImage(
      images[node.logoUrl],
      circle.x - circle.r + borderR - 1,
      circle.y - circle.r + borderR - 1,
      circle.r * 2 - 2 * borderR + 2,
      circle.r * 2 - 2 * borderR + 2
    );

    ctx.globalCompositeOperation = 'multiply';
    ctx.drawImage(
      images[textureSphereSrc],
      circle.x - circle.r + borderR,
      circle.y - circle.r + borderR,
      circle.r * 2 - 2 * borderR,
      circle.r * 2 - 2 * borderR
    );

    ctx.globalAlpha = 0.5;
    ctx.globalCompositeOperation = 'hard-light';
    ctx.drawImage(
      images[textureSphere2Src],
      circle.x - circle.r + borderR,
      circle.y - circle.r + borderR,
      circle.r * 2 - 2 * borderR,
      circle.r * 2 - 2 * borderR
    );
    ctx.globalAlpha = 1;
  }

  drawTitle(ctx, node, fontSize, radius, canvas.width / 2);

  return canvas;
}

function drawTitle(
  ctx: CanvasRenderingContext2D,
  node: any,
  fontSize: number,
  radius: number,
  centerX: number
) {
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  ctx.font = `${400} ${fontSize}px Roboto`;
  ctx.fillStyle = '#9F9FA5';
  ctx.fillText(node.name, centerX, radius * 2 + fontSize / 2 + 3);
}

function drawCircle(ctx: CanvasRenderingContext2D, c: any) {
  ctx.beginPath();
  ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
  ctx.fill();
}
