export function rotateCanvas(ctx, x, y, radians) {
  ctx.translate(x, y);
  ctx.rotate(radians);
  ctx.translate(-x, -y);
}

export function setOpacity(hex, alpha) {
  return `${hex}${Math.floor(alpha * 255)
    .toString(16)
    .padStart(2, 0)}`;
}
