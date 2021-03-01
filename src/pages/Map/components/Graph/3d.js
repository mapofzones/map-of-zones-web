import React, { useRef, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ForceGraph3D from 'react-force-graph-3d';
import { FormattedMessage } from 'react-intl';
import { forceCollide } from 'd3-force-3d';

import { trackEvent } from 'common/helper';

import { ReactComponent as FilterIcon } from 'assets/images/filter.svg';
import { ReactComponent as FullScreenIcon } from 'assets/images/fulll-screen-icon.svg';
import { ReactComponent as CollapseScreenIcon } from 'assets/images/collapse-screen-icon.svg';
import { ReactComponent as CloseIcon } from 'assets/images/close-icon.svg';
import { ReactComponent as TgShareLogo } from 'assets/images/tg-share.svg';
import { ReactComponent as TwitterShareLogo } from 'assets/images/twitter-share.svg';

import {
  useFocusedNodeNeighbors,
  useTwitterShareText,
  useTelegramShareText,
  useLinkThreeObject,
  useLinkColor,
  useNodeColor,
  useNodeThreeObject,
} from './hooks';
import NodeTooltip from './Tooltips/NodeTooltip';
import LinkTooltip from './Tooltips/LinkTooltip';
import ZonesColorDescriptor from './ZonesColorDescriptor';
import ZonesFilter from '../ZonesFilter';

import styles from './index.module.css';

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
  const [hoveredNode, setHoveredNode] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [initialCameraPosition, setCameraPosition] = useState(false);
  const fgRef = useRef();

  // TODO: Find a better way to get notified when 3d layout is ready
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const position = fgRef.current.cameraPosition();

      setCameraPosition(position);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

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

  useEffect(() => {
    if (initialCameraPosition) {
      if (focusedNode) {
        const distance = 100;
        const distRatio =
          1 +
          distance / Math.hypot(focusedNode.x, focusedNode.y, focusedNode.z);
        fgRef.current.cameraPosition(
          {
            x: focusedNode.x * distRatio,
            y: focusedNode.y * distRatio,
            z: focusedNode.z * distRatio,
          },
          focusedNode,
          2000,
        );
      } else {
        fgRef.current.cameraPosition(
          {
            x: initialCameraPosition.x,
            y: initialCameraPosition.y,
            z: initialCameraPosition.z,
          },
          {
            x: 0,
            y: 0,
            z: 0,
          },
          2000,
        );
      }
    }
  }, [focusedNode, initialCameraPosition]);

  const onNodeHover = useCallback(node => setHoveredNode(node), [
    setHoveredNode,
  ]);
  const onLinkHover = useCallback(link => setHoveredLink(link), [
    setHoveredLink,
  ]);
  const toggleFilter = useCallback(() => setShowFilter(!showFilter), [
    setShowFilter,
    showFilter,
  ]);
  const clearNodeFocus = useCallback(() => {
    if (focusedNode) {
      onNodeFocus(null);
    }
  }, [focusedNode, onNodeFocus]);
  const focusedNodeNeighbors = useFocusedNodeNeighbors(focusedNode, data.graph);
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
      } else {
        clearNodeFocus();
      }
    },
    [focusedNode, onNodeFocus, focusedNodeNeighbors, clearNodeFocus, period],
  );
  const applyFilter = useCallback(
    filter => {
      clearNodeFocus();
      setFilter(filter);
      setShowFilter(false);
    },
    [setShowFilter, setFilter, clearNodeFocus],
  );
  const twitterShareText = useTwitterShareText(focusedNode, period);
  const telegramShareText = useTelegramShareText(focusedNode, period);
  const nodeColor = useNodeColor(focusedNode, focusedNodeNeighbors);
  const nodeThreeObject = useNodeThreeObject(focusedNode, focusedNodeNeighbors);
  const linkThreeObject = useLinkThreeObject(focusedNode);
  const linkColor = useLinkColor(focusedNode);

  return (
    <div>
      <div className={cx('container', { blurred: isBlurred })}>
        <ForceGraph3D
          ref={fgRef}
          height={mapOpened ? document.documentElement.clientHeight : 500}
          nodeRelSize={NODE_REL_SIZE}
          nodeVal={zoneWeightAccessor}
          nodeColor={nodeColor}
          nodeResolution={16}
          nodeLabel={null}
          graphData={data}
          onNodeHover={onNodeHover}
          nodeThreeObject={nodeThreeObject}
          nodeThreeObjectExtend
          onNodeClick={onNodeClick}
          onLinkHover={onLinkHover}
          linkColor={linkColor}
          linkThreeObject={linkThreeObject}
          linkThreeObjectExtend
          d3AlphaDecay={0.02}
          d3VelocityDecay={0.3}
          showNavInfo={false}
          onNodeDragEnd={() =>
            trackEvent({
              category: 'Map',
              action: 'drag zone',
            })
          }
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
              toggleGraphType('2D');
            }}
            className={cx('roundButton', 'graphTypeButton')}
          >
            2D
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
      {hoveredNode && <NodeTooltip node={hoveredNode} period={period.name} />}
      {hoveredLink && <LinkTooltip link={hoveredLink} period={period.name} />}
      <ZonesFilter
        onRequestClose={toggleFilter}
        isOpen={showFilter}
        applyFilter={applyFilter}
        currentFilter={currentFilter}
      />
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
