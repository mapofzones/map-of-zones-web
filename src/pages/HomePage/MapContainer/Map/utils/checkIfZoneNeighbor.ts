import { MapLink } from '../Types';
import { getZoneKey } from './getZoneKey';

export function checkIfZoneNeighbor(
  link: MapLink,
  activeZoneKey: string,
  currentZoneKey: string
): unknown {
  const sourceZoneKey = getZoneKey(link.source);
  const targetZoneKey = getZoneKey(link.target);
  return sourceZoneKey === activeZoneKey && targetZoneKey === currentZoneKey;
}
