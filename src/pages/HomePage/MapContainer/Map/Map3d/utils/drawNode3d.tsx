export function drawNode3d(node: any, images: any) {
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

  ctx.fillStyle = node.color;
  ctx.shadowColor = node.color;
  ctx.shadowBlur = 0;
  ctx.globalCompositeOperation = 'source-over';
  drawCircle(ctx, circle);
  ctx.shadowColor = null as any;
  ctx.shadowBlur = null as any;

  if (images[node.logoUrl]) {
    ctx.globalCompositeOperation = 'source-over';
    const borderR = node.radius * 0.2;
    ctx.drawImage(
      images[node.logoUrl],
      circle.x - circle.r + borderR,
      circle.y - circle.r + borderR,
      circle.r * 2 - 2 * borderR,
      circle.r * 2 - 2 * borderR
    );
  }

  const grd = ctx.createLinearGradient(
    circle.x - circle.r,
    circle.y - circle.r,
    circle.x + circle.r,
    circle.y + circle.r
  );
  grd.addColorStop(0, 'white');
  grd.addColorStop(1, 'black');
  ctx.fillStyle = grd;
  ctx.globalCompositeOperation = 'hard-light';
  drawCircle(ctx, circle);

  const gradient = ctx.createRadialGradient(
    width / 2 - radius / 2,
    radius / 2,
    radius / 5,
    (width / 2) * 0.9,
    radius * 0.9,
    radius
  );
  gradient.addColorStop(0, '#ffffff99');
  gradient.addColorStop(1, '#33333D');
  ctx.fillStyle = gradient;
  ctx.globalCompositeOperation = 'soft-light';
  drawCircle(ctx, circle);

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  ctx.font = `${400} ${fontSize}px Roboto`;
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(node.name, canvas.width / 2, radius * 2 + fontSize / 2);
  return canvas;
}

function drawCircle(ctx: any, c: any) {
  ctx.beginPath();
  ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
  ctx.fill();
}
