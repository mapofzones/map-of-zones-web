import { getZoneKey } from './getZoneKey';
import { MapLink } from '../Types';

export function checkIfZoneNeighbor(
  link: MapLink,
  activeZoneKey: string,
  currentZoneKey: string
): unknown {
  const sourceZoneKey = getZoneKey(link.source);
  const targetZoneKey = getZoneKey(link.target);
  return sourceZoneKey === activeZoneKey && targetZoneKey === currentZoneKey;
}
