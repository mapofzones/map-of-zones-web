import React, { useRef, useEffect, useState, useCallback } from 'react';
import classNames from 'classnames/bind';
import ForceGraph2D from 'react-force-graph-2d';
import { FormattedMessage } from 'react-intl';

import { ReactComponent as MinusSign } from 'assets/images/minus.svg';
import { ReactComponent as PlusSign } from 'assets/images/plus.svg';

import NodeTooltip from './NodeHoverTooltip';

import styles from './index.module.css';

const cx = classNames.bind(styles);

const MAX_SIZE = 20;

function Graph({ data, isTableOpened, toggleTableOpen, period }) {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [currentZoom, updateZoom] = useState(1);
  const fgRef = useRef();

  useEffect(() => {
    // TODO
    // fgRef.current.d3Force('link').distance(() => MAX_SIZE * 2);
  }, []);

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

  return (
    <div className={cx('container', { blurMap: isTableOpened })}>
      <ForceGraph2D
        ref={fgRef}
        enableZoomPanInteraction={false}
        height={500}
        nodeRelSize={MAX_SIZE}
        nodeVal={({ ibcTxsWeight }) => ibcTxsWeight}
        nodeColor={({ color }) => color}
        nodeLabel={null}
        linkColor={() => '#fff'}
        graphData={data}
        onNodeHover={node => setHoveredNode(node)}
      />
      {hoveredNode && <NodeTooltip node={hoveredNode} period={period} />}
      {isTableOpened && (
        <div className={cx('closeTableButton')} onClick={toggleTableOpen}>
          <FormattedMessage
            id="back-to-map-title"
            defaultMessage="Back to Map"
          />
        </div>
      )}
      <div className={cx('zoomButtonsContainer')}>
        <button type="button" onClick={zoomIn} className={cx('zoomButton')}>
          <PlusSign />
        </button>
        <button type="button" onClick={zoomOut} className={cx('zoomButton')}>
          <MinusSign />
        </button>
      </div>
    </div>
  );
}

export default Graph;
