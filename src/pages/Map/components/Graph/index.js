import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import ForceGraph2D from 'react-force-graph-2d';
import tinygradient from 'tinygradient';
import NodeTooltip from './NodeHoverTooltip';

import { getZoneColor } from 'common/helper';

import styles from './index.module.css';

const cx = classNames.bind(styles);

const MIN_SIZE = 10;
const MAX_SIZE = 40;

const getNodeRadius = weight =>
  MIN_SIZE + Math.round((MAX_SIZE - MIN_SIZE) * weight);


function Graph({ data, isTableOpened, toggleTableOpen }) {
  const [hoveredNode, setHoveredNode] = useState(null);


  return (
    <div className={cx('graph-container', {blurMap:isTableOpened})}>
      <ForceGraph2D
        enableZoomPanInteraction={false}
        height={500}
        nodeCanvasObject={({ x, y, id, sentPercentage, weight }, ctx) => {
          ctx.fillStyle = getZoneColor(sentPercentage);
          ctx.beginPath();
          ctx.arc(x, y, getNodeRadius(weight), 0, 2 * Math.PI, false);
          ctx.fill();
        }}
        linkColor={() => '#fff'}
        graphData={data}
        onNodeHover={(node) => setHoveredNode(node)}
        nodeRelSize={12}
      />

      {hoveredNode &&
        <NodeTooltip
          node={hoveredNode}
        />}

      {isTableOpened &&
      <div className={cx('close-table-button')}
           onClick={toggleTableOpen}>
        Back to Map
      </div>}
    </div>
  );
}

export default Graph;
