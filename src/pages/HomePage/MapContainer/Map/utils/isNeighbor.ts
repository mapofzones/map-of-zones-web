import { checkIfZoneNeighbor } from './checkIfZoneNeighbor';
import { MapLink } from '../Types';

export function isNeighbor(
  activeZoneKey: string | undefined,
  currentZoneKey: string,
  links: MapLink[]
): boolean {
  return (
    !!activeZoneKey &&
    links.some(
      (link) =>
        checkIfZoneNeighbor(link, activeZoneKey, currentZoneKey) ||
        checkIfZoneNeighbor(link, currentZoneKey, activeZoneKey)
    )
  );
}
