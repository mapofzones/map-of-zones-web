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

import { trackEvent } from 'common/helper';

import { ReactComponent as FilterIcon } from 'assets/images/filter.svg';
import { ReactComponent as MinusSign } from 'assets/images/minus.svg';
import { ReactComponent as PlusSign } from 'assets/images/plus.svg';
import { ReactComponent as FullScreenIcon } from 'assets/images/fulll-screen-icon.svg';
import { ReactComponent as CollapseScreenIcon } from 'assets/images/collapse-screen-icon.svg';
import { ReactComponent as CloseIcon } from 'assets/images/close-icon.svg';
import { ReactComponent as TgShareLogo } from 'assets/images/tg-share.svg';
import { ReactComponent as TwitterShareLogo } from 'assets/images/twitter-share.svg';

import {
  useNodeCanvasObject,
  useLinkCanvasObject,
  useFocusedNodeNeighbors,
  useTwitterShareText,
  useTelegramShareText,
} from './hooks';
import NodeTooltip from './Tooltips/NodeTooltip';
import LinkTooltip from './Tooltips/LinkTooltip';
import ZonesColorDescriptor from './ZonesColorDescriptor';
import ZonesFilter from '../ZonesFilter';

// import NodeModal from './Modal/NodeModal';

import styles from './index.module.css';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

const NODE_REL_SIZE = 4;

function Graph({
  data,
  isBlurred,
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

  const [graphData, setGraphData] = useState(data);

  useEffect(() => {
    setGraphData(prevState => {
      if (
        prevState.graph._nodeCount !== data.graph._nodeCount ||
        prevState.graph._edgeCount !== data.graph._edgeCount
      ) {
        return data;
      }

      return prevState;
    });
  }, [data]);

  const [hoveredNode, setHoveredNode] = useState(null);
  // const [clickedNode, setClickedNode] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [currentZoom, updateZoom] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isFocused, setIsFocused] = useState(true);
  // const [isModalOpened, setModalOpened] = useState(false);
  const fgRef = useRef();

  const focusedNodeNeighbors = useFocusedNodeNeighbors(
    focusedNode,
    graphData.graph,
  );

  const [images, setImages] = useState({});

  useEffect(() => {
    if (graphData?.nodes) {
      graphData.nodes.forEach(({ id, zoneLabelUrlBig }) => {
        if (!images[id] && zoneLabelUrlBig) {
          const image = new Image();
          image.src = zoneLabelUrlBig;

          setImages(prevState => ({ ...prevState, [id]: image }));
        }
      });
    }
  }, [graphData, images]);

  useEffect(() => {
    const fg = fgRef.current;

    // links
    fg.d3Force('link').distance(() => Math.random() * 100 + 150);

    // charge
    fg.d3Force('charge').distanceMax(200);
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
      fgRef.current.centerAt(focusedNode.x, focusedNode.y, 500);

      if (!isRendered) {
        setTimeout(() => {
          setIsRendered(true);
          fgRef.current.centerAt(focusedNode.x, focusedNode.y, 2000);
        }, 2000);
      }
      zoom(2);
    } else {
      zoom(1);
    }
  }, [graphData, focusedNode, isRendered, zoneFromSearch, zoom]);

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
        focusedNodeNeighbors.includes(node)
      ) {
        setHoveredNode(node);
      }
    },
    [focusedNode, focusedNodeNeighbors],
  );
  const onLinkHover = useCallback(link => setHoveredLink(link), [
    setHoveredLink,
  ]);
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
      if (!focusedNode || focusedNodeNeighbors.includes(node)) {
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
    [focusedNode, onNodeFocus, focusedNodeNeighbors, clearNodeFocus, period],
  );

  const onNodeDragEnd = useCallback(() => {
    trackEvent({
      category: 'Map',
      action: 'drag zone',
    });
  }, []);

  const nodeCanvasObject = useNodeCanvasObject(
    zoneWeightAccessor,
    focusedNode,
    focusedNodeNeighbors,
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
  const linkCanvasObject = useLinkCanvasObject(focusedNode, hoveredNode);
  const twitterShareText = useTwitterShareText(focusedNode, period);
  const telegramShareText = useTelegramShareText(focusedNode, period);

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={cx('container', { blurred: isBlurred })}>
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
        {!!focusedNode && (
          <div className={cx('buttonsContainer', 'shareButtonsContainer')}>
            <div className={cx('shareTitle')}>
              <FormattedMessage id="share" defaultMessage="Share" />
            </div>
            <a
              onClick={() =>
                trackEvent({
                  category: 'Map',
                  action: 'telegram share',
                  label: focusedNode.name,
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
                  label: focusedNode.name,
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
          </div>
        )}
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
      {hoveredLink && isFocused && <LinkTooltip link={hoveredLink} />}
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
  isBlurred: PropTypes.string,
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
  zoneWeightAccessor: 'ibcTxsWeight',
  onNodeFocus: () => {},
};

export default Graph;
