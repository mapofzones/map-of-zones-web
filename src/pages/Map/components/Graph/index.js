import React, { useRef, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ForceGraph2D from 'react-force-graph-2d';

import { ReactComponent as MinusSign } from 'assets/images/minus.svg';
import { ReactComponent as PlusSign } from 'assets/images/plus.svg';
import { ReactComponent as FullScreenIcon } from '../../../../assets/images/fulll-screen-icon.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/images/close-icon.svg';

import NodeTooltip from './NodeTooltip';
import ZonesColorDescriptor from './ZonesColorDescriptor';

import styles from './index.module.css';

const cx = classNames.bind(styles);

const MAX_SIZE = 20;

function Graph({ data, isBlurred, period, zoneWeightAccessor, mapOpened, toggleMapOpen }) {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [currentZoom, updateZoom] = useState(1);
  const fgRef = useRef();

  useEffect(() => {
    // TODO
    // fgRef.current.d3Force('link').distance(() => MAX_SIZE * 2);


  }, []);

  useEffect(() => {
    if (mapOpened) {
      window.scrollTo(0,0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mapOpened]);

  const zoom = useCallback(
    val => {
      const newZoom = currentZoom * val;

      fgRef.current.zoom(newZoom, 500);
      updateZoom(newZoom);
    },
    [currentZoom],
  );
  const zoomIn = useCallback(() => zoom(2), [zoom]);
  const zoomOut = useCallback(() => zoom(0.5), [zoom]);
  const onNodeHover = useCallback(node => setHoveredNode(node), []);
  const linkColor = useCallback(() => '#fff', []);
  const nodeCanvasObjectMode = useCallback(() => 'after', []);
  const nodeCanvasObject = useCallback(({ x, y, name }, ctx, globalScale) => {
    const deltaY = 30; // TODO: Get this data from the node size
    const fontSize = 12 / globalScale;
    const textWidth = ctx.measureText(name).width;
    const backgroundDimensions = [textWidth, fontSize].map(
      n => n + fontSize * 0.5,
    );

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
  }, []);

  return (
    <div>
      <div className={cx('container', { blurred: isBlurred }, {opened: mapOpened})}>
        <ForceGraph2D
          ref={fgRef}
          // enableZoomPanInteraction={false}
          height={mapOpened?document.documentElement.clientHeight:500}
          nodeRelSize={MAX_SIZE}
          nodeVal={zoneWeightAccessor}
          nodeColor="color"
          nodeLabel={null}
          linkColor={linkColor}
          graphData={data}
          onNodeHover={onNodeHover}
          nodeCanvasObject={nodeCanvasObject}
          nodeCanvasObjectMode={nodeCanvasObjectMode}

        />
        <ZonesColorDescriptor className={cx('zonesColorDescriptor')} />
        <div className={cx('zoomButtonsContainer')}>
          <button type="button" onClick={zoomIn} className={cx('zoomButton')}>
            <PlusSign />
          </button>
          <button type="button" onClick={zoomOut} className={cx('zoomButton')}>
            <MinusSign />
          </button>
          {!mapOpened && <button type="button" onClick={()=>toggleMapOpen('open')} className={cx('zoomButton', 'full-screen-button')}>
            <FullScreenIcon />
          </button>}
        </div>
        {mapOpened && <button type="button" onClick={toggleMapOpen} className={cx('zoomButton', 'close-button')}>
          <CloseIcon />
        </button>}
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
};

Graph.defaultProps = {
  zoneWeightAccessor: 'ibcTxsWeight',
};

export default Graph;
