import { useEffect, useRef } from 'react';

import { ForceGraphMethods } from 'react-force-graph-3d';

import { changeGraphZoom } from '../utils/changeGraphZoom';

export function useWheelWithThrottling(
  graphRef: React.MutableRefObject<ForceGraphMethods | undefined>,
  graphContainerRef: React.RefObject<HTMLDivElement>,
  minZoom: number,
  maxZoom: number
) {
  const throttleInProgress = useRef<boolean>(false);
  const throttleDelta = useRef(0);

  useEffect(() => {
    function onScroll(event: WheelEvent) {
      event.preventDefault();
      throttleDelta.current += event.deltaY;

      if (throttleInProgress.current) {
        return;
      }
      throttleInProgress.current = true;

      setTimeout(() => {
        const graph = graphRef.current;
        if (!graph) {
          return;
        }

        const position = graphRef.current?.camera().position;
        if (!position) {
          return;
        }

        const currentZoom = Math.hypot(position.x, position.y, position.z);
        const zoomValue = Math.max(
          minZoom,
          Math.min(currentZoom - throttleDelta.current / 2, maxZoom)
        );

        changeGraphZoom(graph, position, zoomValue, currentZoom, 1000);

        throttleInProgress.current = false;
        throttleDelta.current = 0;
      }, 200);
    }

    // clean up code
    graphContainerRef.current?.removeEventListener('wheel', onScroll);
    graphContainerRef.current?.addEventListener('wheel', onScroll, { passive: true });
    return () => graphContainerRef?.current?.removeEventListener('wheel', onScroll);
  }, [graphContainerRef, graphRef, maxZoom, minZoom]);
}
