import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ForceGraph2D from 'react-force-graph-2d';
import { FormattedMessage } from 'react-intl';
import { forceCollide } from 'd3-force-3d';
import { parse } from 'querystringify';
import { useLocation } from 'react-router-dom';

import { trackEvent } from 'common/helper';

import { ReactComponent as FilterIcon } from 'assets/images/filter.svg';
import { ReactComponent as MinusSign } from 'assets/images/minus.svg';
import { ReactComponent as PlusSign } from 'assets/images/plus.svg';
import { ReactComponent as FullScreenIcon } from 'assets/images/fulll-screen-icon.svg';
import { ReactComponent as CollapseScreenIcon } from 'assets/images/collapse-screen-icon.svg';
import { ReactComponent as CloseIcon } from 'assets/images/close-icon.svg';
import { ReactComponent as TgShareLogo } from 'assets/images/tg-share.svg';
import { ReactComponent as TwitterShareLogo } from 'assets/images/twitter-share.svg';
import logoUrl from 'assets/images/logo.svg';

import {
  useNodeCanvasObject,
  useLinkCanvasObject,
  useGraphNeighbors,
  useTwitterShareText,
  useTelegramShareText,
  useGraphData,
} from './hooks';
import NodeTooltip from './Tooltips/Node';
import LinkTooltip from './Tooltips/Link';
import ZonesColorDescriptor from './ZonesColorDescriptor';
import ZonesFilter from '../ZonesFilter';

// import NodeModal from './Modal/NodeModal';

import styles from './index.module.css';
import { setOpacity } from 'common/canvas-helper';

const cx = classNames.bind(styles);

const NODE_REL_SIZE = 4;

const zoomValue = nodesCount => {
  if (nodesCount < 5) {
    return 2 - nodesCount * 0.1;
  }

  if (nodesCount < 15) {
    return 2 - nodesCount * 0.05;
  }

  return nodesCount > 50 ? 0.8 : 1;
};

const loadImage = (src, forceCors = false) =>
  new Promise((resolve, reject) => {
    const image = new Image();

    image.src = src;

    if (forceCors) {
      image.crossOrigin = 'anonymous';
    }

    function onError(e) {
      image.removeEventListener('load', onLoad);
      reject(e);
    }

    function onLoad() {
      image.removeEventListener('error', onError);
      resolve(image);
    }

    image.addEventListener('load', onLoad, { once: true });
    image.addEventListener('error', onError, { once: true });
  });

function Graph({
  data,
  isChartVisible,
  period,
  zoneWeightAccessor,
  mapOpened,
  toggleMapOpen,
  onNodeFocus,
  focusedNode,
  setFilter,
  currentFilter,
  toggleGraphType,
}) {
  const location = useLocation();

  const zoneFromSearch = useMemo(() => parse(location.search).zone, [
    location.search,
  ]);

  const graphData = useGraphData(data);

  const [hoveredNode, setHoveredNode] = useState(null);
  const [draggedNode, setDraggedNode] = useState(null);
  // const [clickedNode, setClickedNode] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [currentZoom, updateZoom] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isFocused, setIsFocused] = useState(true);
  // const [isModalOpened, setModalOpened] = useState(false);
  const fgRef = useRef();

  const getNodeNeighbors = useGraphNeighbors(data.graph);

  const [images, setImages] = useState({});
  const nodes = graphData?.nodes;

  useEffect(() => {
    if (!isChartVisible) {
      fgRef.current.pauseAnimation();
    } else {
      fgRef.current.resumeAnimation();
    }
  }, [isChartVisible]);

  useEffect(() => {
    const loadData = async () => {
      const loadedImages = await Promise.all(
        nodes.map(async ({ id, zoneLabelUrlBig }) => {
          if (zoneLabelUrlBig) {
            try {
              const image = await loadImage(
                zoneLabelUrlBig,
                process.env.NODE_ENV === 'production',
              );

              return {
                id,
                image,
              };
            } catch {
              try {
                const imageFallback = await loadImage(zoneLabelUrlBig);

                return {
                  id,
                  image: imageFallback,
                };
              } catch {
                return null;
              }
            }
          }

          return null;
        }),
      );

      setImages(prevState => ({
        ...prevState,
        ...loadedImages
          .filter(Boolean)
          .reduce((acc, { id, image }) => ({ ...acc, [id]: image }), {}),
      }));
    };

    if (nodes) {
      loadData();
    }
  }, [nodes]);

  useEffect(() => {
    const canvas = containerRef.current.querySelector('canvas');
    const r = 1;

    canvas.offscreenCanvas = document.createElement('canvas');
    canvas.offscreenCanvas.width = 20;
    canvas.offscreenCanvas.height = r * 2;
    var ctx = canvas.offscreenCanvas.getContext('2d');
    const cometPosX = r;
    const cometPosY = r;
    const tailPosX = 20;
    const tailPosY = r;

    //draw comet
    ctx.beginPath();
    ctx.arc(cometPosX, cometPosY, r, 0, 2 * Math.PI, true);
    ctx.fillStyle = '#78B481';
    ctx.fill();

    //draw comet tail
    const gradient = ctx.createLinearGradient(
      cometPosX + 1,
      cometPosY,
      tailPosX,
      tailPosY,
    );

    gradient.addColorStop(0, setOpacity('#60AB8B', 1));
    gradient.addColorStop(0.3, setOpacity('#D2D65A', 0.7));
    gradient.addColorStop(0.5, setOpacity('#E9B880', 0.5));
    gradient.addColorStop(0.65, setOpacity('#D76969', 0.35));
    gradient.addColorStop(1, setOpacity('#D76969', 0));

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cometPosX + 1, cometPosY);
    ctx.lineTo(tailPosX, tailPosY);
    ctx.stroke();
  }, []);

  function calculateLinkLengthByRating(link) {
    const param = calculateLengthParameter(link);
    const isTestnetLink =
      !link.source.isZoneMainnet || !link.target.isZoneMainnet;
    const factor = isTestnetLink ? 7 : 5;
    const maxDistance = isTestnetLink ? 350 : 230;
    return Math.min(param * factor + 150, maxDistance);
  }

  function calculateLengthParameter(link) {
    return Math.max(link.source.peersRating, link.target.peersRating);
  }

  function getChargeStrengthByNode(node) {
    return -200;
  }

  function getChargeMaxDistanceByNode(node) {
    return 200;
  }

  useEffect(() => {
    const fg = fgRef.current;

    // links
    fg.d3Force('link').distance(link => calculateLinkLengthByRating(link));

    // charge
    fg.d3Force('charge')
      .strength(getChargeStrengthByNode)
      .distanceMax(getChargeMaxDistanceByNode);
  }, []);

  useEffect(() => {
    // collision
    const collide = forceCollide(node => {
      return (
        Math.sqrt(Math.max(0, node[zoneWeightAccessor] || 1)) * NODE_REL_SIZE +
        2
      );
    });
    fgRef.current.d3Force('collide', collide);
  }, [zoneWeightAccessor]);

  useEffect(() => {
    if (mapOpened) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mapOpened]);

  const zoom = useCallback(
    val => {
      fgRef.current.zoom(val, 500);
      updateZoom(val);
    },
    [updateZoom],
  );

  useEffect(() => {
    if (!zoneFromSearch) {
      setIsRendered(true);
    }

    if (focusedNode) {
      let { x, y } = nodes.find(({ id }) => focusedNode.id === id) || {};

      if (!x || !y) {
        const nodeCoords = fgRef.current.getGraphBbox(
          ({ id }) => id === focusedNode.id,
        );

        x = (nodeCoords.x[0] + nodeCoords.x[1]) / 2;
        y = (nodeCoords.y[0] + nodeCoords.y[1]) / 2;
      }

      if (x && y) {
        fgRef.current.centerAt(x, y, 500);

        if (!isRendered) {
          setTimeout(() => {
            setIsRendered(true);
            fgRef.current.centerAt(x, y, 2000);
          }, 2000);
        }
      }
    } else {
      fgRef.current.centerAt(0, 0, 500);
    }

    zoom(zoomValue(nodes.length));
  }, [nodes, focusedNode, isRendered, zoneFromSearch, zoom]);

  const zoomIn = useCallback(() => {
    zoom(currentZoom * 2);
    trackEvent({ category: 'Map', action: 'zoom', label: 'in' });
  }, [currentZoom, zoom]);
  const zoomOut = useCallback(() => {
    zoom(currentZoom / 2);
    trackEvent({ category: 'Map', action: 'zoom', label: 'out' });
  }, [currentZoom, zoom]);
  const onNodeHover = useCallback(
    node => {
      if (
        !node ||
        !focusedNode ||
        focusedNode === node ||
        focusedNode?.id === node?.id ||
        getNodeNeighbors(focusedNode).includes(node?.id)
      ) {
        setHoveredNode(node);
      }
    },
    [focusedNode, getNodeNeighbors],
  );
  const onNodeDrag = useCallback(
    node => {
      if (
        !node ||
        !focusedNode ||
        focusedNode === node ||
        focusedNode?.id === node?.id ||
        getNodeNeighbors(focusedNode).includes(node?.id)
      ) {
        setDraggedNode(node);
      }
    },
    [focusedNode, getNodeNeighbors],
  );
  const onLinkHover = useCallback(
    link => {
      if (
        !link ||
        !focusedNode ||
        link.source?.id === focusedNode?.id ||
        link.target?.id === focusedNode?.id
      ) {
        setHoveredLink(link);
      }
    },
    [focusedNode],
  );
  const toggleFilter = useCallback(
    () => setShowFilter(prevState => !prevState),
    [setShowFilter],
  );
  const clearNodeFocus = useCallback(() => {
    if (focusedNode) {
      onNodeFocus(null);
    }
  }, [focusedNode, onNodeFocus]);

  const onMouseEnter = useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  const onMouseLeave = useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  const onNodeClick = useCallback(
    node => {
      if (!focusedNode || getNodeNeighbors(focusedNode).includes(node.id)) {
        onNodeFocus(node);
        trackEvent({
          category: 'Map',
          action: 'select zone',
          label: node.name,
          extra: { period: period?.rawText },
        });
        // setModalOpened(true);
        // setClickedNode(node);
      } else {
        clearNodeFocus();
      }
    },
    [focusedNode, onNodeFocus, getNodeNeighbors, clearNodeFocus, period],
  );

  const onNodeDragEnd = useCallback(() => {
    setDraggedNode(null);
    trackEvent({
      category: 'Map',
      action: 'drag zone',
    });
  }, [setDraggedNode]);

  const nodeCanvasObject = useNodeCanvasObject(
    zoneWeightAccessor,
    hoveredNode,
    focusedNode,
    getNodeNeighbors,
    NODE_REL_SIZE,
    images,
  );
  const applyFilter = useCallback(
    filter => {
      clearNodeFocus();
      setFilter(filter);
      setShowFilter(false);
    },
    [setShowFilter, setFilter, clearNodeFocus],
  );
  const linkCanvasObject = useLinkCanvasObject(
    focusedNode,
    hoveredNode || draggedNode,
  );
  const twitterShareText = useTwitterShareText(focusedNode?.name, period);
  const telegramShareText = useTelegramShareText(focusedNode?.name, period);
  const containerRef = useRef(null);
  const shareImage = useCallback(async () => {
    if (containerRef?.current) {
      const canvas = containerRef.current.querySelector('canvas');

      if (canvas) {
        try {
          const logoImage = await loadImage(logoUrl);
          const fg = fgRef.current;
          const scale = fg.zoom();
          const context = canvas.getContext('2d');
          const { x, y } = fg.screen2GraphCoords(0, 0);
          const logoPaddding = 13 / scale;
          const logoWidth = 115.8 / scale;
          const logoHeight = 54.3 / scale;

          context.drawImage(
            logoImage,
            x + logoPaddding,
            y + logoPaddding,
            logoWidth,
            logoHeight,
          );
          context.globalCompositeOperation = 'destination-over';
          context.fillStyle = '#120e25'; // TODO: Use image instead
          context.fillRect(x, y, canvas.width / scale, canvas.height / scale);

          const canvasImage = canvas.toDataURL('image/png');
          const link = document.createElement('a');

          link.style.display = 'none';
          link.href = canvasImage;
          link.download = 'map.png'; // TODO: Change name
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          context.globalCompositeOperation = 'source-over';
        } catch (e) {
          console.log(e);

          const context = canvas.getContext('2d');

          context.globalCompositeOperation = 'source-over';
        }
      }
    }
  }, [containerRef, fgRef]);

  useEffect(() => {
    if (focusedNode && nodes) {
      const node = nodes.find(({ id }) => focusedNode.id === id);

      if (!node) {
        clearNodeFocus();
      }
    }
  }, [focusedNode, nodes]);

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div
        className={cx('container', { blurred: !isChartVisible })}
        ref={containerRef}
      >
        <ForceGraph2D
          ref={fgRef}
          height={mapOpened ? document.documentElement.clientHeight : 500}
          nodeRelSize={NODE_REL_SIZE}
          nodeVal={zoneWeightAccessor}
          nodeColor="color"
          nodeLabel={null}
          graphData={graphData}
          onNodeHover={onNodeHover}
          nodeCanvasObject={nodeCanvasObject}
          linkCanvasObject={linkCanvasObject}
          onNodeClick={onNodeClick}
          onLinkHover={onLinkHover}
          d3AlphaDecay={0.02}
          d3VelocityDecay={0.3}
          onNodeDragEnd={onNodeDragEnd}
          onBackgroundClick={clearNodeFocus}
          onNodeDrag={onNodeDrag}
        />
        <ZonesColorDescriptor className={cx('zonesColorDescriptor')} />
        <div className={cx('buttonsContainer', 'zoomButtonsContainer')}>
          <div className={cx('zonesFilterContainer')}>
            {(currentFilter?.sortOrder || currentFilter?.trendLine) && (
              <div className={cx('dot')} />
            )}
            <button
              type="button"
              onClick={toggleFilter}
              className={cx('roundButton', 'filterButton')}
            >
              <FilterIcon />
            </button>
          </div>
          <button type="button" onClick={zoomIn} className={cx('roundButton')}>
            <PlusSign />
          </button>
          <button type="button" onClick={zoomOut} className={cx('roundButton')}>
            <MinusSign />
          </button>
          {(!mapOpened && (
            <button
              type="button"
              onClick={() => toggleMapOpen('open')}
              className={cx('roundButton', 'fullScreenButton')}
            >
              <FullScreenIcon />
            </button>
          )) || (
            <button
              type="button"
              onClick={toggleMapOpen}
              className={cx('roundButton', 'fullScreenButton')}
            >
              <CollapseScreenIcon />
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              clearNodeFocus();
              toggleGraphType('3D');
            }}
            className={cx('roundButton', 'graphTypeButton')}
          >
            3D
          </button>
        </div>
        <div className={cx('buttonsContainer', 'shareButtonsContainer')}>
          <div className={cx('shareTitle')}>
            <FormattedMessage id="share" defaultMessage="Share" />
          </div>
          <a
            onClick={() =>
              trackEvent({
                category: 'Map',
                action: 'telegram share',
                label: focusedNode?.name,
              })
            }
            href={telegramShareText}
            target="_blank"
            rel="noopener noreferrer"
            className={cx('roundButton')}
          >
            <TgShareLogo />
          </a>
          <a
            onClick={() =>
              trackEvent({
                category: 'Map',
                action: 'twitter share',
                label: focusedNode?.name,
                extra: { period: period?.rawText },
              })
            }
            href={twitterShareText}
            target="_blank"
            rel="noopener noreferrer"
            className={cx('roundButton')}
          >
            <TwitterShareLogo />
          </a>
          {false && (
            <button
              type="button"
              onClick={shareImage}
              className={cx('roundButton', 'downloadButton')}
            >
              <div className={cx('downloadArrowIcon')}>↓</div>
              <div className={cx('downloadIcon')} />
            </button>
          )}
        </div>
        {!!focusedNode && (
          <button
            type="button"
            onClick={clearNodeFocus}
            className={cx('roundButton', 'closeButton')}
          >
            <CloseIcon />
          </button>
        )}
      </div>
      {hoveredNode && isFocused && (
        <NodeTooltip node={hoveredNode} period={period} />
      )}
      {hoveredLink && isFocused && (
        <LinkTooltip link={hoveredLink} period={period} />
      )}
      <ZonesFilter
        onRequestClose={toggleFilter}
        isOpen={showFilter}
        applyFilter={applyFilter}
        currentFilter={currentFilter}
      />
      {/*{clickedNode && (*/}
      {/*  <NodeModal*/}
      {/*    isOpen={isModalOpened}*/}
      {/*    onRequestClose={() => setModalOpened(false)}*/}
      {/*    node={clickedNode}*/}
      {/*    period={period.name}*/}
      {/*  />*/}
      {/*)}*/}
    </div>
  );
}

Graph.propTypes = {
  data: PropTypes.shape({
    nodes: PropTypes.array,
    links: PropTypes.array,
    graph: PropTypes.object,
  }),
  isChartVisible: PropTypes.string,
  period: PropTypes.shape({
    hours: PropTypes.number,
    step: PropTypes.number,
    name: PropTypes.node,
    rawText: PropTypes.string,
  }),
  zoneWeightAccessor: PropTypes.string,
  mapOpened: PropTypes.bool,
  toggleMapOpen: PropTypes.func,
  onNodeFocus: PropTypes.func,
  setFilter: PropTypes.func,
  toggleGraphType: PropTypes.func,
  currentFilter: PropTypes.object,
  focusedNode: PropTypes.object,
};

Graph.defaultProps = {
  zoneWeightAccessor: 'ibcVolumeWeight',
  onNodeFocus: () => {},
};

export default Graph;
