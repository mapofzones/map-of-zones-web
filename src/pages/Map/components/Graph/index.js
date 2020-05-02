import React, { useRef, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ForceGraph2D from 'react-force-graph-2d';
import tinycolor from 'tinycolor2';

import { ReactComponent as MinusSign } from 'assets/images/minus.svg';
import { ReactComponent as PlusSign } from 'assets/images/plus.svg';
import { ReactComponent as FullScreenIcon } from 'assets/images/fulll-screen-icon.svg';
import { ReactComponent as CloseIcon } from 'assets/images/close-icon.svg';

import NodeTooltip from './NodeTooltip';
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
}) {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [focusedNode, setFocusedNode] = useState(null);
  const [currentZoom, updateZoom] = useState(1);
  const fgRef = useRef();

  useEffect(() => {
    fgRef.current.d3Force('link').distance(() => 150);
  }, []);

  useEffect(() => {
    if (mapOpened) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mapOpened]);

  const zoom = useCallback(val => {
    fgRef.current.zoom(val, 500);
    updateZoom(val);
  }, []);
  const onNodeClick = useCallback(
    node => {
      fgRef.current.centerAt(node.x, node.y, 500);
      zoom(1);
      setFocusedNode(node);
      onNodeFocus(node);
    },
    [zoom, onNodeFocus],
  );
  const zoomIn = useCallback(() => zoom(currentZoom * 2), [currentZoom, zoom]);
  const zoomOut = useCallback(() => zoom(currentZoom / 2), [currentZoom, zoom]);
  const onNodeHover = useCallback(node => setHoveredNode(node), []);
  const linkColor = useCallback(() => {
    return focusedNode
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(255, 255, 255, 0.5)';
  }, [focusedNode]);
  const nodeCanvasObject = useCallback(
    (node, ctx, globalScale) => {
      const { x, y, name, color } = node;
      const fontSize = 12 / globalScale;
      const textWidth = ctx.measureText(name).width;
      const backgroundDimensions = [textWidth, fontSize].map(
        n => n + fontSize * 0.5,
      );
      const r =
        Math.sqrt(Math.max(0, node[zoneWeightAccessor] || 1)) * NODE_REL_SIZE;
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
    [zoneWeightAccessor, focusedNode],
  );

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
          onNodeClick={onNodeClick}
        />
        <ZonesColorDescriptor className={cx('zonesColorDescriptor')} />
        <div className={cx('zoomButtonsContainer')}>
          <button type="button" onClick={zoomIn} className={cx('zoomButton')}>
            <PlusSign />
          </button>
          <button type="button" onClick={zoomOut} className={cx('zoomButton')}>
            <MinusSign />
          </button>
          {!mapOpened && (
            <button
              type="button"
              onClick={() => toggleMapOpen('open')}
              className={cx('zoomButton', 'full-screen-button')}
            >
              <FullScreenIcon />
            </button>
          )}
        </div>
        {mapOpened && (
          <button
            type="button"
            onClick={toggleMapOpen}
            className={cx('zoomButton', 'close-button')}
          >
            <CloseIcon />
          </button>
        )}
      </div>
      {hoveredNode && <NodeTooltip node={hoveredNode} period={period} />}
    </div>
  );
}

Graph.propTypes = {
  data: PropTypes.shape({
    nodes: PropTypes.array,
    links: PropTypes.array,
  }),
  isBlurred: PropTypes.bool,
  period: PropTypes.node,
  zoneWeightAccessor: PropTypes.string,
  mapOpened: PropTypes.bool,
  toggleMapOpen: PropTypes.func,
  onNodeFocus: PropTypes.func,
};

Graph.defaultProps = {
  zoneWeightAccessor: 'ibcTxsWeight',
  onNodeFocus: () => {},
};

export default Graph;
