import { MapLink } from '../Types';
import { checkIfZoneNeighbor } from './checkIfZoneNeighbor';

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
