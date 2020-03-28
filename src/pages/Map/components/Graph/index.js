import React from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import tinygradient from 'tinygradient';

const MIN_SIZE = 10;
const MAX_SIZE = 40;

const gradient = tinygradient([
  '#D76969',
  '#D79D69',
  '#EABA82',
  '#D4D759',
  '#5CA98D',
]);

const getNodeRadius = weight =>
  MIN_SIZE + Math.round((MAX_SIZE - MIN_SIZE) * weight);

const getNodeColor = sentPercentage =>
  gradient.rgbAt(sentPercentage).toHexString();

function Graph({ data }) {
  return (
    <ForceGraph2D
      height={400}
      nodeCanvasObject={({ x, y, id, sentPercentage, weight }, ctx) => {
        ctx.fillStyle = getNodeColor(sentPercentage);
        ctx.beginPath();
        ctx.arc(x, y, getNodeRadius(weight), 0, 2 * Math.PI, false);
        ctx.fill();
      }}
      graphData={data}
    />
  );
}

export default Graph;
