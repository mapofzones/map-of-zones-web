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

  const x = width / 2;
  const y = radius;
  let r = radius;

  const lineWidth = 6;
  ctx.beginPath();
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = node.color;
  ctx.arc(x, y, r - lineWidth / 2, 0, 2 * Math.PI, false);
  ctx.closePath();
  ctx.stroke();

  const borderR = radius * 0.12;
  r -= borderR;
  const x0 = x - r;
  const y0 = y - r;
  const sphereSize = r * 2;
  const drawLogo = images[node.logoUrl];
  if (drawLogo) {
    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(images[node.logoUrl], x0 - 1, y0 - 1, sphereSize + 2, sphereSize + 2);
  }

  ctx.globalCompositeOperation = 'multiply';
  ctx.drawImage(images[textureSphereSrc], x0, y0, sphereSize, sphereSize);

  if (!drawLogo) {
    ctx.fillStyle = node.color;
    drawCircle(ctx, x, y, r);
  }

  ctx.globalAlpha = 0.5;
  ctx.globalCompositeOperation = 'hard-light';
  ctx.drawImage(images[textureSphere2Src], x0, y0, sphereSize, sphereSize);
  ctx.globalAlpha = 1;

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

function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}
