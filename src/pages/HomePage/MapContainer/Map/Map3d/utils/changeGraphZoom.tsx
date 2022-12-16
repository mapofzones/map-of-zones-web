import { ForceGraphMethods } from 'react-force-graph-3d';
import { Vector3 } from 'three';

export function changeGraphZoom(
  graph: ForceGraphMethods,
  currentPosition: Vector3,
  zoomValue: number,
  currentZoom: number
) {
  const x = currentPosition.x || 0;
  const y = currentPosition.y || 0;
  const z = currentPosition.z || 0;

  const zoomRatio = zoomValue / currentZoom;
  graph.cameraPosition(
    {
      x: x * zoomRatio,
      y: y * zoomRatio,
      z: z * zoomRatio,
    },
    {
      x: 0,
      y: 0,
      z: 0,
    },
    0
  );
}
