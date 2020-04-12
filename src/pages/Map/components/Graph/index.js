import React from 'react';
import ForceGraph2D from 'react-force-graph-2d';

import { getZoneColor } from 'common/helper';

const MIN_SIZE = 10;
const MAX_SIZE = 40;

const getNodeRadius = weight =>
  MIN_SIZE + Math.round((MAX_SIZE - MIN_SIZE) * weight);

function Graph({ data }) {
  return (
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
    />
  );
}

export default Graph;
