import React, { useRef, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ForceGraph2D from 'react-force-graph-2d';
import { FormattedMessage } from 'react-intl';
import { forceCollide } from 'd3-force-3d';

import { ReactComponent as MinusSign } from 'assets/images/minus.svg';
import { ReactComponent as PlusSign } from 'assets/images/plus.svg';
import { ReactComponent as FullScreenIcon } from 'assets/images/fulll-screen-icon.svg';
import { ReactComponent as CloseIcon } from 'assets/images/close-icon.svg';
import { ReactComponent as TgShareLogo } from 'assets/images/tg-share.svg';
import { ReactComponent as TwitterShareLogo } from 'assets/images/twitter-share.svg';

import {
  useNodeCanvasObject,
  useFocusedNodeNeighbors,
  useLinkColor,
  useTwitterShareText,
  useTelegramShareText,
} from './hooks';
import NodeTooltip from './Tooltips/NodeTooltip';
import LinkTooltip from './Tooltips/LinkTooltip';
import ZonesColorDescriptor from './ZonesColorDescriptor';

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
}) {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [currentZoom, updateZoom] = useState(1);
  const fgRef = useRef();

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
    if (focusedNode) {
      fgRef.current.centerAt(focusedNode.x, focusedNode.y, 500);
      zoom(2);
    } else {
      zoom(1);
    }
  }, [focusedNode, zoom]);

  const zoomIn = useCallback(() => zoom(currentZoom * 2), [currentZoom, zoom]);
  const zoomOut = useCallback(() => zoom(currentZoom / 2), [currentZoom, zoom]);
  const onNodeHover = useCallback(node => setHoveredNode(node), [
    setHoveredNode,
  ]);
  const onLinkHover = useCallback(link => setHoveredLink(link), [
    setHoveredLink,
  ]);
  const onCloseButtonClick = useCallback(() => {
    if (mapOpened) {
      toggleMapOpen();
    }

    if (focusedNode) {
      onNodeFocus(null);
    }
  }, [mapOpened, toggleMapOpen, focusedNode, onNodeFocus]);
  const linkColor = useLinkColor(focusedNode);
  const focusedNodeNeighbors = useFocusedNodeNeighbors(focusedNode, data.graph);
  const nodeCanvasObject = useNodeCanvasObject(
    zoneWeightAccessor,
    focusedNode,
    focusedNodeNeighbors,
    NODE_REL_SIZE,
  );
  const twitterShareText = useTwitterShareText(focusedNode, period);
  const telegramShareText = useTelegramShareText(focusedNode, period);

  return (
    <div>
      <div className={cx('container', { blurred: isBlurred })}>
        <ForceGraph2D
          ref={fgRef}
          height={mapOpened ? document.documentElement.clientHeight : 500}
          nodeRelSize={NODE_REL_SIZE}
          nodeVal={zoneWeightAccessor}
          nodeColor="color"
          nodeLabel={null}
          linkColor={linkColor}
          graphData={data}
          onNodeHover={onNodeHover}
          nodeCanvasObject={nodeCanvasObject}
          onNodeClick={onNodeFocus}
          onLinkHover={onLinkHover}
          d3AlphaDecay={0.02}
          d3VelocityDecay={0.3}
          linkDirectionalParticles={2}
          linkDirectionalParticleSpeed={0.006}
          linkDirectionalParticleWidth={2.5}
          // linkDirectionalParticleColor={() => 'rgba(255,255,255,0.6)'}
        />
        <ZonesColorDescriptor className={cx('zonesColorDescriptor')} />
        <div className={cx('buttonsContainer', 'zoomButtonsContainer')}>
          <button type="button" onClick={zoomIn} className={cx('roundButton')}>
            <PlusSign />
          </button>
          <button type="button" onClick={zoomOut} className={cx('roundButton')}>
            <MinusSign />
          </button>
          {!mapOpened && (
            <button
              type="button"
              onClick={() => toggleMapOpen('open')}
              className={cx('roundButton', 'fullScreenButton')}
            >
              <FullScreenIcon />
            </button>
          )}
        </div>
        {!!focusedNode && (
          <div className={cx('buttonsContainer', 'shareButtonsContainer')}>
            <div className={cx('shareTitle')}>
              <FormattedMessage id="share" defaultMessage="Share" />
            </div>
            <a
              href={telegramShareText}
              target="_blank"
              rel="noopener noreferrer"
              className={cx('roundButton')}
            >
              <TgShareLogo />
            </a>
            <a
              href={twitterShareText}
              target="_blank"
              rel="noopener noreferrer"
              className={cx('roundButton')}
            >
              <TwitterShareLogo />
            </a>
          </div>
        )}
        {(mapOpened || !!focusedNode) && (
          <button
            type="button"
            onClick={onCloseButtonClick}
            className={cx('roundButton', 'closeButton')}
          >
            <CloseIcon />
          </button>
        )}
      </div>
      {hoveredNode && <NodeTooltip node={hoveredNode} period={period.name} />}
      {hoveredLink && <LinkTooltip link={hoveredLink} period={period.name} />}
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
  focusedNode: PropTypes.object,
};

Graph.defaultProps = {
  zoneWeightAccessor: 'ibcTxsWeight',
  onNodeFocus: () => {},
};

export default Graph;
