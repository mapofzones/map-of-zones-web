import { useEffect, useRef } from 'react';

import { ForceGraphMethods } from 'react-force-graph-3d';

import { changeGraphZoom } from '../utils/changeGraphZoom';

export function useWheel(
  graphRef: React.MutableRefObject<ForceGraphMethods | undefined>,
  graphContainerRef: React.RefObject<HTMLDivElement>,
  minZoom: number,
  maxZoom: number
) {
  useEffect(() => {
    function onWheel(event: WheelEvent) {
      event.preventDefault();
      const graph = graphRef.current;
      if (!graph) {
        return;
      }

      const position = graphRef.current?.camera().position;
      if (!position) {
        return;
      }

      const currentZoom = Math.hypot(position.x, position.y, position.z);
      const zoomValue = calculateZoomValue(
        currentZoom,
        event.deltaY,
        minZoom,
        maxZoom,
        event.ctrlKey
      );

      if (zoomValue !== currentZoom) {
        changeGraphZoom(graph, position, zoomValue, currentZoom, 200);
      }
    }

    // clean up code
    graphContainerRef.current?.removeEventListener('wheel', onWheel);
    graphContainerRef.current?.addEventListener('wheel', onWheel, { passive: false });
    return () => graphContainerRef?.current?.removeEventListener('wheel', onWheel);
  }, [graphContainerRef, graphRef, maxZoom, minZoom]);
}

function calculateZoomValue(
  currentZoom: number,
  throttleDelta: number,
  minZoom: number,
  maxZoom: number,
  isPinchEvent: boolean
) {
  const k = isPinchEvent ? 5 : 3;
  const calculatedZoom = currentZoom + k * throttleDelta;
  const zoomValue = Math.max(minZoom, Math.min(calculatedZoom, maxZoom));
  return zoomValue;
}
