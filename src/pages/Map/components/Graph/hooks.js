import { useCallback, useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import { rotateCanvas, setOpacity } from 'common/canvas-helper';

export const useNodeCanvasObject = (
  zoneWeightAccessor,
  hoveredNode,
  focusedNode,
  getNodeNeighbors,
  nodeRelSize,
  images,
) =>
  useCallback(
    (node, ctx, globalScale) => {
      const r =
        Math.sqrt(Math.max(0, node[zoneWeightAccessor] || 1)) * nodeRelSize;

      const isActiveMode = !!focusedNode || !!hoveredNode;
      const isActiveZone = focusedNode
        ? isActiveNode(focusedNode, node, getNodeNeighbors)
        : hoveredNode
        ? isActiveNode(hoveredNode, node, getNodeNeighbors)
        : false;

      const isFocusedOrHovered =
        node?.id === focusedNode?.id || node?.id === hoveredNode?.id;

      drawZone(
        ctx,
        node,
        r,
        isActiveMode,
        isActiveZone,
        isFocusedOrHovered,
        images,
      );

      if (isActiveMode && !isActiveZone) {
        return;
      }

      drawNodeTitle(ctx, node, r, isActiveMode, isActiveZone, globalScale);
    },
    [
      zoneWeightAccessor,
      nodeRelSize,
      hoveredNode,
      focusedNode,
      getNodeNeighbors,
      images,
    ],
  );

function isActiveNode(mainNode, currentNode, getNodeNeighbors) {
  return (
    mainNode.id === currentNode.id ||
    getNodeNeighbors(mainNode).includes(currentNode?.id)
  );
}

export const useGraphNeighbors = graph =>
  useCallback(node => (node ? graph.neighbors(node.id) || [] : null), [graph]);

export const useFocusedNodeNeighbors = (node, graph) => {
  const getNodeNeighbors = useGraphNeighbors(graph);
  return useMemo(() => getNodeNeighbors(node), [getNodeNeighbors, node]);
};

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
      if (
        focusedNode &&
        focusedNode?.id !== source?.id &&
        focusedNode?.id !== target?.id
      ) {
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

      let alpha = 0.3;
      if (hoveredNode) {
        if (hoveredNode !== source && hoveredNode !== target) {
          return;
        } else {
          alpha = 0.5;
        }
      }

      const width = 1;
      const lineWidth = width / globalScale;

      ctx.strokeStyle = setOpacity(target.color, alpha);
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
let prevTime = Date.now();
function render() {
  const now = Date.now();
  if (now - prevTime > 33) {
    if (offset >= 1) {
      offset = 0;
    }
    offset += 0.01;
    prevTime = now;
  }
  requestAnimationFrame(render);
}
requestAnimationFrame(render);

const drawLinkComet = (ctx, source, target) => {
  const xLength = target.x - source.x;
  const yLength = target.y - source.y;
  const cometPosX = source.x + offset * xLength;
  const cometPosY = source.y + offset * yLength;
  const radians = Math.atan2(-yLength, -xLength);

  drawCometAndRotate(ctx, cometPosX, cometPosY, radians);
};

function drawCometAndRotate(ctx, x, y, radians) {
  rotateCanvas(ctx, x, y, radians);

  ctx.drawImage(ctx.canvas.offscreenCanvas, 0, 0, 20, 2, x - 1, y - 1, 20, 2);

  rotateCanvas(ctx, x, y, -radians);
}

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

export const useNodeColor = (focusedNode, focusedNodeNeighbors) =>
  useCallback(
    node => {
      const isFocused =
        focusedNode?.id === node?.id ||
        (focusedNodeNeighbors && focusedNodeNeighbors.includes(node?.id));

      if (focusedNode && !isFocused) {
        return setOpacity(node.color, 0.2);
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
        text.color = setOpacity(node.color, 0.2);
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

function drawZone(
  ctx,
  node,
  r,
  isActiveMode,
  isActiveZone,
  isFocusedOrSelected,
  images,
) {
  const { x, y, color } = node;

  if (isFocusedOrSelected) {
    ctx.shadowColor = color;
    ctx.shadowBlur = 30;
  }

  const alpha = isActiveMode && !isActiveZone ? 0.2 : 1;
  const zoneColor = setOpacity(color, alpha);

  let needToDrawSimpleNode = true;
  if (images[node.id]) {
    needToDrawSimpleNode = !tryDrawNodeWithLogo(
      ctx,
      x,
      y,
      r,
      zoneColor,
      alpha,
      images[node.id],
    );
  }

  if (needToDrawSimpleNode) {
    ctx.fillStyle = zoneColor;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
  }

  if (isFocusedOrSelected) {
    ctx.shadowColor = null;
    ctx.shadowBlur = null;
  }
}

function tryDrawNodeWithLogo(ctx, x, y, r, zoneColor, alpha, image) {
  ctx.globalAlpha = alpha;
  try {
    ctx.drawImage(image, x - r + 3, y - r + 3, r * 2 - 6, r * 2 - 6);
  } catch (e) {
    return false;
  }
  ctx.globalAlpha = 1;

  ctx.strokeStyle = zoneColor;
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  ctx.closePath();
  ctx.stroke();

  return true;
}

const cachedNodeTitleData = {};
const paddingHorizontal = 2;
const paddingVertical = 1;

function drawNodeTitle(ctx, node, r, isActiveMode, isActiveZone, globalScale) {
  const { name, isZoneMainnet } = node;

  let data = cachedNodeTitleData[node.id];
  if (!data || data.globalScale !== globalScale || data.r !== r) {
    data = getNewTitleData(ctx, globalScale, name, r, isZoneMainnet);
    cachedNodeTitleData[node.id] = data;
  }

  drawTitle(ctx, node, data, isActiveMode, isActiveZone, isZoneMainnet);
}

function calculateBgDimension(size, fontSize) {
  return size + fontSize * 0.5;
}

function getNewTitleData(ctx, globalScale, name, r, isZoneMainnet) {
  const fontSize = Math.max(4, 10 / globalScale);
  const fontWeight = isZoneMainnet ? 600 : 500;
  const nameInCamelCase = name[0].toUpperCase() + name.substring(1);
  const textWidth = ctx.measureText(nameInCamelCase).width;
  const textBgWidth = calculateBgDimension(textWidth, fontSize);
  const textBgHeight = calculateBgDimension(fontSize, fontSize);

  const rectWidth = textBgWidth + paddingHorizontal * 2;
  const rectHeight = textBgHeight + paddingVertical * 2;

  const deltaY = r + textBgHeight / 2 + 2 / globalScale + paddingVertical * 2;

  return {
    globalScale,
    fontSize,
    fontWeight,
    nameInCamelCase,
    textWidth,
    textBgWidth,
    textBgHeight,
    deltaY,
    rectWidth,
    rectHeight,
    r,
  };
}

function drawTitle(ctx, node, data, isActiveMode, isActiveZone, isZoneMainnet) {
  const { x, y } = node;
  const { fontSize, fontWeight, nameInCamelCase, deltaY } = data;
  const { textBgWidth, textBgHeight, rectWidth, rectHeight } = data;
  const rectX = x - textBgWidth / 2 - paddingHorizontal;
  const rectY = y - textBgHeight / 2 + deltaY - paddingVertical;

  ctx.fillStyle = getTitleBgColor(isActiveMode, isActiveZone, isZoneMainnet);
  roundRect(ctx, rectX, rectY, rectWidth, rectHeight, 4);
  ctx.fill();

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `${fontWeight} ${fontSize}px Poppins`;
  ctx.fillStyle = getTitleColor(isActiveMode, isActiveZone, isZoneMainnet);
  ctx.fillText(nameInCamelCase, x, y + deltaY);
}

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
            ...Object.values(diff.nodes.update).map(node => ({ ...node })),
            ...nodes.filter(item => !diff.nodes.update[nodeKeyAccessor(item)]),
          ];
        }
      }
    }

    setGraphData({
      links,
      nodes: nodes.sort((a, b) => a.peersRating - b.peersRating),
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

function getTitleBgColor(isZoneMainnet) {
  if (isZoneMainnet) {
    return '#212737';
  }
  return 'rgba(10, 11, 42, 0.5)';
}

function getTitleColor(isZoneMainnet) {
  if (isZoneMainnet) {
    return 'rgb(255, 255, 255)';
  }
  return 'rgba(235, 235, 235, 0.6)';
}
