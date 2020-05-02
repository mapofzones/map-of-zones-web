import React, { useRef, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ForceGraph2D from 'react-force-graph-2d';

import { ReactComponent as MinusSign } from 'assets/images/minus.svg';
import { ReactComponent as PlusSign } from 'assets/images/plus.svg';
import { ReactComponent as FullScreenIcon } from 'assets/images/fulll-screen-icon.svg';
import { ReactComponent as CloseIcon } from 'assets/images/close-icon.svg';

import { useNodeCanvasObject } from './hooks';
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

  const zoom = useCallback(
    val => {
      fgRef.current.zoom(val, 500);
      updateZoom(val);
    },
    [updateZoom],
  );
  const onNodeClick = useCallback(
    node => {
      fgRef.current.centerAt(node.x, node.y, 500);
      zoom(2);
      setFocusedNode(node);
      onNodeFocus(node);
    },
    [zoom, setFocusedNode, onNodeFocus],
  );
  const zoomIn = useCallback(() => zoom(currentZoom * 2), [currentZoom, zoom]);
  const zoomOut = useCallback(() => zoom(currentZoom / 2), [currentZoom, zoom]);
  const onNodeHover = useCallback(node => setHoveredNode(node), [
    setHoveredNode,
  ]);
  const onCloseButtonClick = useCallback(() => {
    if (mapOpened) {
      toggleMapOpen();
    }

    if (focusedNode) {
      setFocusedNode(null);
      onNodeFocus(null);
      zoom(1);
    }
  }, [
    mapOpened,
    toggleMapOpen,
    focusedNode,
    setFocusedNode,
    onNodeFocus,
    zoom,
  ]);
  const linkColor = useCallback(() => {
    return focusedNode
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(255, 255, 255, 0.5)';
  }, [focusedNode]);
  const nodeCanvasObject = useNodeCanvasObject(
    zoneWeightAccessor,
    focusedNode,
    NODE_REL_SIZE,
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
        {(mapOpened || focusedNode) && (
          <button
            type="button"
            onClick={onCloseButtonClick}
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
