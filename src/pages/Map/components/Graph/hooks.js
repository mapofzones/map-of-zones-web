import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import tinycolor from 'tinycolor2';
import { parse, stringify } from 'querystringify';

export const useNodeCanvasObject = (
  zoneWeightAccessor,
  focusedNode,
  focusedNodeNeighbors,
  nodeRelSize,
) =>
  useCallback(
    (node, ctx, globalScale) => {
      const { x, y, name, color } = node;
      const fontSize = 10 / globalScale;
      const textWidth = ctx.measureText(name).width;
      const backgroundDimensions = [textWidth, fontSize].map(
        n => n + fontSize * 0.5,
      );
      let r =
        Math.sqrt(Math.max(0, node[zoneWeightAccessor] || 1)) * nodeRelSize;
      const deltaY = r + backgroundDimensions[1] / 2 + 2 / globalScale;
      const isFocused =
        focusedNode === node ||
        (focusedNodeNeighbors && focusedNodeNeighbors.includes(node));

      if (focusedNode && !isFocused) {
        ctx.fillStyle = tinycolor(color)
          .setAlpha(0.1)
          .toString();
      } else {
        ctx.fillStyle = color;
      }

      if (focusedNode === node) {
        ctx.shadowColor = color;
        ctx.shadowBlur = 30;
      }

      if (offset > 0.99) r *= 1 + Math.abs(1 - offset) * 12;

      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.shadowColor = null;
      ctx.shadowBlur = null;
      ctx.font = `${fontSize}px Poppins`;

      if (focusedNode && !isFocused) {
        ctx.fillStyle = 'rgba(10, 11, 42, 0.1)';
      } else {
        ctx.fillStyle = 'rgba(10, 11, 42, 0.5)';
      }

      ctx.fillRect(
        x - backgroundDimensions[0] / 2,
        y - backgroundDimensions[1] / 2 + deltaY,
        ...backgroundDimensions,
      );
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (focusedNode && !isFocused) {
        ctx.fillStyle = 'rgba(235, 235, 235, 0.1)';
      } else {
        ctx.fillStyle = 'rgba(235, 235, 235, 0.6)';
      }

      ctx.fillText(name, x, y + deltaY);
    },
    [zoneWeightAccessor, focusedNode, focusedNodeNeighbors, nodeRelSize],
  );

export const useFocusedNodeNeighbors = (focusedNode, graph) =>
  useMemo(
    () =>
      focusedNode
        ? graph.neighbors(focusedNode.id).map(id => graph.node(id))
        : null,
    [focusedNode, graph],
  );

export const useLinkColor = focusedNode =>
  useCallback(
    ({ source, target }) => {
      if (!focusedNode || focusedNode === source || focusedNode === target) {
        return 'rgba(255, 255, 255, 0.2)';
      }

      return 'transparent';
    },
    [focusedNode],
  );

export const useShareLink = queryParams => {
  const location = useLocation();

  return useMemo(
    () =>
      `${window.location.origin}${location.pathname}?${stringify({
        ...parse(location.search),
        ...(queryParams || {}),
      })}`,
    [location, queryParams],
  );
};

export const useTwitterShareText = (focusedNode, period) => {
  const queryParams = useMemo(
    () => ({
      utm_source: 'twitter.com',
    }),
    [],
  );
  const shareLink = useShareLink(queryParams);
  const text = useMemo(
    () => `Check out the «${focusedNode?.name}» zone inter-connection activity for the last ${period?.rawText}:
${shareLink}
by @mapofzones
#CosmosNetwork #IBC #MapOfZones #gameofzones #GoZ`,
    [shareLink, focusedNode, period],
  );

  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
};

export const useTelegramShareText = (focusedNode, period) => {
  const queryParams = useMemo(
    () => ({
      utm_source: 'telegram.org',
    }),
    [],
  );
  const shareLink = useShareLink(queryParams);
  const text = useMemo(
    () => `Check out the «${focusedNode?.name}» zone inter-connection activity for the last ${period?.rawText}
by @mapofzones`,
    [focusedNode, period],
  );

  return `https://t.me/share/url?url=${encodeURIComponent(
    shareLink,
  )}&text=${encodeURIComponent(text)}`;
};

export const useLinkCanvasObject = focusedNode =>
  useCallback(
    ({ source, target }, ctx, globalScale) => {
      const width = 1;
      const lineWidth = width / globalScale;

      if (focusedNode && focusedNode !== source && focusedNode !== target) {
        return;
      }

      if (
        !source ||
        !target ||
        !source.hasOwnProperty('x') ||
        !target.hasOwnProperty('x')
      ) {
        return;
      }

      const gradient = ctx.createLinearGradient(
        source.x,
        source.y,
        target.x,
        target.y,
      );

      gradient.addColorStop(
        0,
        tinycolor(source.color)
          .setAlpha(0.4)
          .toString(),
      );
      gradient.addColorStop(
        1,
        tinycolor(target.color)
          .setAlpha(0.4)
          .toString(),
      );

      ctx.strokeStyle = gradient;
      ctx.lineWidth = lineWidth;

      ctx.beginPath();
      ctx.moveTo(source.x, source.y);
      ctx.lineTo(target.x, target.y);
      ctx.stroke();

      drawLinkComet(ctx, source, target, globalScale);
    },
    [focusedNode],
  );

let offset = 0;
export const useRenderFrame = () =>
  useCallback(() => {
    if (offset >= 1) {
      offset = 0;
    }
    offset += 0.005;
  }, []);

const drawLinkComet = (ctx, source, target) => {
  const xLength = target.x - source.x;
  const yLength = target.y - source.y;
  const cometPosX = source.x + offset * xLength;
  const cometPosY = source.y + offset * yLength;
  const tailOffset = offset - 0.1 > 0 ? offset - 0.1 : 0;
  const tailPosX = source.x + tailOffset * xLength;
  const tailPosY = source.y + tailOffset * yLength;

  //draw comet
  ctx.beginPath();
  ctx.arc(cometPosX, cometPosY, 0.5, 0, 2 * Math.PI, true);
  ctx.fillStyle = '#78B481';
  ctx.fill();

  //draw comet tail
  const gradient = ctx.createLinearGradient(
    cometPosX,
    cometPosY,
    tailPosX,
    tailPosY,
  );

  gradient.addColorStop(
    0,
    tinycolor('#60AB8B')
      .setAlpha(1)
      .toString(),
  );
  gradient.addColorStop(
    0.3,
    tinycolor('#D2D65A')
      .setAlpha(0.7)
      .toString(),
  );
  gradient.addColorStop(
    0.5,
    tinycolor('#E9B880')
      .setAlpha(0.5)
      .toString(),
  );
  gradient.addColorStop(
    0.65,
    tinycolor('#D76969')
      .setAlpha(0.35)
      .toString(),
  );
  gradient.addColorStop(
    1,
    tinycolor('#D76969')
      .setAlpha(0)
      .toString(),
  );

  ctx.strokeStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(cometPosX, cometPosY);
  ctx.lineTo(tailPosX, tailPosY);
  ctx.stroke();
};
