import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import tinycolor from 'tinycolor2';
import { parse, stringify } from 'querystringify';
import {
  BufferAttribute,
  BufferGeometry,
  Line,
  LineBasicMaterial,
  Scene,
  Vector3,
  VertexColors,
  SphereGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';
import SpriteText from 'three-spritetext';

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
      const r =
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
        return 'rgb(255, 255, 255)';
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

export const useLinkCanvasObject = (focusedNode, hoveredNode) =>
  useCallback(
    ({ activeChannels, source, target }, ctx, globalScale) => {
      const width = 1;
      const lineWidth = width / globalScale;

      if (focusedNode && focusedNode !== source && focusedNode !== target) {
        return;
      }

      let alpha = 0.4;

      if (hoveredNode) {
        if (hoveredNode !== source && hoveredNode !== target) {
          alpha = 0.1;
        } else {
          alpha = 0.6;
        }
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
          .setAlpha(alpha)
          .toString(),
      );
      gradient.addColorStop(
        1,
        tinycolor(target.color)
          .setAlpha(alpha)
          .toString(),
      );

      ctx.strokeStyle = gradient;
      ctx.lineWidth = lineWidth;

      ctx.beginPath();
      ctx.moveTo(source.x, source.y);
      ctx.lineTo(target.x, target.y);
      ctx.stroke();

      if (
        activeChannels &&
        (!hoveredNode || hoveredNode === source || hoveredNode === target)
      ) {
        drawLinkComet(ctx, source, target, globalScale);
      }
    },
    [focusedNode, hoveredNode],
  );

let offset = 0;
setInterval(() => {
  if (offset >= 1) {
    offset = 0;
  }
  offset += 0.00825;
}, 33);

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

//for 3d
export const useLinkThreeObject = focusedNode => {
  return useCallback(
    link => {
      if (
        (focusedNode &&
          focusedNode !== link.source &&
          focusedNode !== link.target) ||
        !link.activeChannels
      ) {
        return;
      }
      const scene = new Scene();

      //draw comet sphere
      const sphereGeometry = new SphereGeometry(0.5, 16, 16);
      const sphereMaterial = new MeshBasicMaterial({ color: 0x78b481 });
      const sphere = new Mesh(sphereGeometry, sphereMaterial);
      scene.add(sphere);

      //draw comet tail
      const cometTailGeometry = new BufferGeometry();
      const material = new LineBasicMaterial({
        vertexColors: VertexColors,
      });
      const cometTail = new Line(cometTailGeometry, material);
      const colors = new Float32Array([
        215 / 255,
        105 / 255,
        105 / 255,
        48 / 255,
        48 / 255,
        62 / 255,
      ]);
      cometTail.geometry.setAttribute('color', new BufferAttribute(colors, 4));
      scene.add(cometTail);

      //animate comet
      const animateComet = () => {
        if (sphere && link) {
          const xLength = link.target.x - link.source.x;
          const yLength = link.target.y - link.source.y;
          const zLength = link.target.z - link.source.z;
          const cometPosX = link.source.x + offset * xLength;
          const cometPosY = link.source.y + offset * yLength;
          const cometPosZ = link.source.z + offset * zLength;
          const tailOffset = offset - 0.1 > 0 ? offset - 0.1 : 0;
          const cometTailPosX = link.source.x + tailOffset * xLength;
          const cometTailPosY = link.source.y + tailOffset * yLength;
          const cometTailPosZ = link.source.z + tailOffset * zLength;

          //update sphere position
          sphere.position.x = cometPosX;
          sphere.position.y = cometPosY;
          sphere.position.z = cometPosZ;

          //update tail position
          const cometTailPoints = [];
          cometTailPoints.push(new Vector3(cometPosX, cometPosY, cometPosZ));
          cometTailPoints.push(
            new Vector3(cometTailPosX, cometTailPosY, cometTailPosZ),
          );
          cometTail.geometry.setFromPoints(cometTailPoints);

          requestAnimationFrame(animateComet);
        }
      };
      requestAnimationFrame(animateComet);

      return scene;
    },
    [focusedNode],
  );
};
export const useNodeColor = (focusedNode, focusedNodeNeighbors) =>
  useCallback(
    node => {
      const isFocused =
        focusedNode === node ||
        (focusedNodeNeighbors && focusedNodeNeighbors.includes(node));

      if (focusedNode && !isFocused) {
        return hex2rgba(node.color, 0.2);
      }

      return node.color;
    },
    [focusedNode, focusedNodeNeighbors],
  );

export const useNodeThreeObject = (focusedNode, focusedNodeNeighbors) =>
  useCallback(
    node => {
      const scene = new Scene();
      const text = new SpriteText(node.name);
      const isFocused =
        focusedNode === node ||
        (focusedNodeNeighbors && focusedNodeNeighbors.includes(node));

      if (focusedNode && !isFocused) {
        text.color = hex2rgba(node.color, 0.2);
      } else {
        text.color = node.color;
      }

      scene.add(text);
      scene.position.set(scene.position.x, -10, scene.position.z);

      return scene;
    },
    [focusedNode, focusedNodeNeighbors],
  );

const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
