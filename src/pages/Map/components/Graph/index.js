import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import ForceGraph2D from 'react-force-graph-2d';
import { FormattedMessage } from 'react-intl';

import NodeTooltip from './NodeHoverTooltip';

import styles from './index.module.css';

const cx = classNames.bind(styles);

const MAX_SIZE = 20;

function Graph({ data, isTableOpened, toggleTableOpen, period }) {
  const [hoveredNode, setHoveredNode] = useState(null);
  const fgRef = useRef();

  useEffect(() => {
    // TODO
    // fgRef.current.d3Force('link').distance(() => MAX_SIZE * 2);
  }, []);

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
    </div>
  );
}

export default Graph;
