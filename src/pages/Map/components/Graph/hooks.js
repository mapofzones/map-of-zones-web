import { useCallback } from 'react';
import tinycolor from 'tinycolor2';

export const useNodeCanvasObject = (
  zoneWeightAccessor,
  focusedNode,
  nodeRelSize,
) =>
  useCallback(
    (node, ctx, globalScale) => {
      const { x, y, name, color } = node;
      const fontSize = 12 / globalScale;
      const textWidth = ctx.measureText(name).width;
      const backgroundDimensions = [textWidth, fontSize].map(
        n => n + fontSize * 0.5,
      );
      const r =
        Math.sqrt(Math.max(0, node[zoneWeightAccessor] || 1)) * nodeRelSize;
      const deltaY = r + backgroundDimensions[1] / 2 + 2 / globalScale;

      if (focusedNode) {
        ctx.fillStyle =
          focusedNode === node
            ? color
            : tinycolor(color)
                .desaturate(25)
                .setAlpha(0.9)
                .toString();
      } else {
        ctx.fillStyle = color;
      }

      if (focusedNode === node) {
        ctx.shadowColor = color;
        ctx.shadowBlur = 15;
      }

      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.shadowColor = null;
      ctx.shadowBlur = null;
      ctx.font = `${fontSize}px Poppins`;
      ctx.fillStyle = 'rgba(10, 11, 42, 0.5)';
      ctx.fillRect(
        x - backgroundDimensions[0] / 2,
        y - backgroundDimensions[1] / 2 + deltaY,
        ...backgroundDimensions,
      );
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(235, 235, 235, 0.6)';
      ctx.fillText(name, x, y + deltaY);
    },
    [zoneWeightAccessor, focusedNode, nodeRelSize],
  );
