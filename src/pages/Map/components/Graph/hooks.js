import { useCallback, useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import tinycolor from 'tinycolor2';
import { parse, stringify } from 'querystringify';
import SpriteText from 'three-spritetext';
import equal from 'fast-deep-equal';
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

import { usePrevious } from 'common/hooks';

function roundRect(canvas, x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  canvas.beginPath();
  canvas.moveTo(x + r, y);
  canvas.arcTo(x + w, y, x + w, y + h, r);
  canvas.arcTo(x + w, y + h, x, y + h, r);
  canvas.arcTo(x, y + h, x, y, r);
  canvas.arcTo(x, y, x + w, y, r);
  canvas.closePath();
}

export const useNodeCanvasObject = (
  zoneWeightAccessor,
  focusedNode,
  focusedNodeNeighbors,
  nodeRelSize,
  images,
) =>
  useCallback(
    (node, ctx, globalScale) => {
      const { x, y, name, color } = node;
      const fontSize = Math.max(4, 10 / globalScale);
      const fontWeight = node.isZoneMainnet ? 600 : 500;
      const nameInCamelCase = name[0].toUpperCase() + name.substring(1);
      const textWidth = ctx.measureText(nameInCamelCase).width;
      const backgroundDimensions = [textWidth, fontSize].map(
        n => n + fontSize * 0.5,
      );
      const r =
        Math.sqrt(Math.max(0, node[zoneWeightAccessor] || 1)) * nodeRelSize;
      const paddingHorizontal = 2;
      const paddingVertical = 1;
      const deltaY =
        r + backgroundDimensions[1] / 2 + 2 / globalScale + paddingVertical * 2;
      const isFocused =
        focusedNode?.id === node?.id ||
        (focusedNodeNeighbors && focusedNodeNeighbors.includes(node?.id));

      if (focusedNode && !isFocused) {
        ctx.fillStyle = tinycolor(color)
          .setAlpha(0.1)
          .toString();
      } else {
        ctx.fillStyle = color;
      }

      if (focusedNode?.id === node?.id) {
        ctx.shadowColor = color;
        ctx.shadowBlur = 30;
      }

      if (images[node.id]) {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.stroke();

        ctx.drawImage(
          images[node.id],
          x - r + 3,
          y - r + 3,
          r * 2 - 6,
          r * 2 - 6,
        );
      } else {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();
      }

      ctx.shadowColor = null;
      ctx.shadowBlur = null;
      ctx.font = `${fontWeight} ${fontSize}px Poppins`;

      if (focusedNode && !isFocused) {
        ctx.fillStyle = 'rgba(10, 11, 42, 0.1)';
      } else {
        if (node.isZoneMainnet) {
          ctx.fillStyle = '#212737';
        } else {
          ctx.fillStyle = 'rgba(10, 11, 42, 0.5)';
        }
      }

      roundRect(
        ctx,
        x - backgroundDimensions[0] / 2 - paddingHorizontal,
        y - backgroundDimensions[1] / 2 + deltaY - paddingVertical,
        backgroundDimensions[0] + paddingHorizontal * 2,
        backgroundDimensions[1] + paddingVertical * 2,
        4,
      );

      ctx.fill();

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (focusedNode && !isFocused) {
        ctx.fillStyle = 'rgba(235, 235, 235, 0.1)';
      } else {
        if (node.isZoneMainnet) {
          ctx.fillStyle = 'rgb(255, 255, 255)';
        } else {
          ctx.fillStyle = 'rgba(235, 235, 235, 0.6)';
        }
      }

      ctx.fillText(nameInCamelCase, x, y + deltaY);
    },
    [
      zoneWeightAccessor,
      nodeRelSize,
      focusedNode,
      focusedNodeNeighbors,
      images,
    ],
  );

export const useFocusedNodeNeighbors = (focusedNode, graph) =>
  useMemo(() => (focusedNode ? graph.neighbors(focusedNode.id) || [] : null), [
    focusedNode,
    graph,
  ]);

export const useLinkColor = focusedNode =>
  useCallback(
    ({ source, target }) => {
      if (
        !focusedNode ||
        focusedNode.id === source.id ||
        focusedNode.id === target.id
      ) {
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

export const getZoneName = zoneName => {
  return !!zoneName ? `«${zoneName}» zone` : 'Cosmos Network';
};

export const useTwitterShareText = (activeZoneName, period) => {
  const queryParams = useMemo(() => ({ utm_source: 'twitter.com' }), []);
  const shareLink = useShareLink(queryParams);
  const text = useMemo(() => {
    const zoneName = getZoneName(activeZoneName);
    return `Check out the ${zoneName} inter-connection activity for the last ${period?.rawText}:
${shareLink}
by @mapofzones
#CosmosNetwork #IBC #MapOfZones #IBCGang #DeFi #Cosmos #Blockchain`;
  }, [shareLink, activeZoneName, period]);

  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
};

export const useTelegramShareText = (activeZoneName, period) => {
  const queryParams = useMemo(
    () => ({
      utm_source: 'telegram.org',
    }),
    [],
  );
  const shareLink = useShareLink(queryParams);
  const text = useMemo(() => {
    const zoneName = getZoneName(activeZoneName);
    return `Check out the ${zoneName} inter-connection activity for the last ${period?.rawText}
by @mapofzones`;
  }, [activeZoneName, period]);

  return `https://t.me/share/url?url=${encodeURIComponent(
    shareLink,
  )}&text=${encodeURIComponent(text)}`;
};

export const useLinkCanvasObject = (focusedNode, hoveredNode) =>
  useCallback(
    ({ activeChannels, source, target }, ctx, globalScale) => {
      const width = 1;
      const lineWidth = width / globalScale;

      if (
        focusedNode &&
        focusedNode?.id !== source?.id &&
        focusedNode?.id !== target?.id
      ) {
        return;
      }

      let alpha = 0.3;

      if (hoveredNode) {
        if (hoveredNode !== source && hoveredNode !== target) {
          alpha = 0.1;
        } else {
          alpha = 0.5;
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

// TODO: Move from here
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
          focusedNode.id !== link.source.id &&
          focusedNode.id !== link.target.id) ||
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

const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const useNodeColor = (focusedNode, focusedNodeNeighbors) =>
  useCallback(
    node => {
      const isFocused =
        focusedNode?.id === node?.id ||
        (focusedNodeNeighbors && focusedNodeNeighbors.includes(node?.id));

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
        focusedNode?.id === node?.id ||
        (focusedNodeNeighbors && focusedNodeNeighbors.includes(node?.id));

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

const linkKeyAccessor = item =>
  `${typeof item.source === 'string' ? item.source : item.source.id}-${
    typeof item.target === 'string' ? item.target : item.target.id
  }`;

const nodeKeyAccessor = item => item.id;

const addToCache = (items, keyAccessor) =>
  items.reduce(
    (acc, item) => ({
      ...acc,
      [keyAccessor(item)]: item,
    }),
    {},
  );

const getDiff = (source, target) =>
  Object.entries(source).reduce(
    (acc, [key, value]) =>
      !target[key]
        ? {
            ...acc,
            [key]: value,
          }
        : acc,
    {},
  );

const getUpdated = (source, target) =>
  Object.entries(source).reduce(
    (acc, [key, value]) =>
      target[key] && !equal(source[key], target[key])
        ? {
            ...acc,
            [key]: value,
          }
        : acc,
    {},
  );

function initData(data) {
  if (!data) {
    return null;
  }

  // TODO: Use deep copy
  return {
    links: data.links?.map(link => ({ ...link })),
    nodes: data.nodes?.map(node => ({ ...node })),
  };
}

function useCache(data) {
  return useMemo(() => {
    let links = null;
    let nodes = null;

    if (data?.links) {
      links = addToCache(data.links, linkKeyAccessor);
    }

    if (data?.nodes) {
      nodes = addToCache(data.nodes, nodeKeyAccessor);
    }

    if (!links && !nodes) {
      return null;
    }

    return {
      links,
      nodes,
    };
  }, [data]);
}

function useDiff(nextData) {
  const prevData = usePrevious(nextData);

  return useMemo(() => {
    let links = null;
    let nodes = null;

    if (nextData?.nodes && prevData?.nodes) {
      const add = getDiff(nextData.nodes, prevData.nodes);
      const remove = getDiff(prevData.nodes, nextData.nodes);
      const update = getUpdated(nextData.nodes, prevData.nodes);

      nodes = {
        add,
        remove,
        update,
      };
    }

    if (nextData?.links && prevData?.links) {
      const add = getDiff(nextData.links, prevData.links);
      const remove = getDiff(prevData.links, nextData.links);
      const update = getUpdated(nextData.links, prevData.links);
      const updateWithNodes = nodes?.update
        ? Object.entries(nextData.links).reduce(
            (acc, [key, link]) =>
              nodes.update[link.source] || nodes.update[link.targe]
                ? {
                    ...acc,
                    [key]: link,
                  }
                : acc,
            {},
          )
        : {};

      links = {
        add,
        remove,
        update: {
          ...update,
          ...updateWithNodes,
        },
      };
    }

    if (!links && !nodes) {
      return null;
    }

    return {
      links,
      nodes,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextData]); // prevData will be changed together with nextData
}

function useGraphDataCached(data, diff) {
  const [graphData, setGraphData] = useState(initData(data));

  useEffect(() => {
    let links = [...(graphData?.links || [])];
    let nodes = [...(graphData?.nodes || [])];

    if (diff) {
      if (diff.links) {
        if (diff.links.add) {
          links = [
            ...links,
            ...Object.values(diff.links.add).map(link => ({ ...link })),
          ];
        }

        if (diff.links.remove) {
          links = links.filter(
            item => !diff.links.remove[linkKeyAccessor(item)],
          );
        }

        if (diff.links.update) {
          links = [
            ...links.filter(item => !diff.links.update[linkKeyAccessor(item)]),
            ...Object.values(diff.links.update).map(link => ({ ...link })),
          ];
        }
      }

      if (diff.nodes) {
        if (diff.nodes.add) {
          nodes = [
            ...nodes,
            ...Object.values(diff.nodes.add).map(node => ({ ...node })),
          ];
        }

        if (diff.nodes.remove) {
          nodes = nodes.filter(
            item => !diff.nodes.remove[nodeKeyAccessor(item)],
          );
        }

        if (diff.nodes.update) {
          nodes = [
            ...nodes.filter(item => !diff.nodes.update[nodeKeyAccessor(item)]),
            ...Object.values(diff.nodes.update).map(node => ({ ...node })),
          ];
        }
      }
    }

    setGraphData({
      links,
      nodes,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diff]); // TODO: Do we need to pass graphData?

  return graphData;
}

export function useGraphData(data) {
  const cachedData = useCache(data);
  const diff = useDiff(cachedData);

  return useGraphDataCached(data, diff);
}
