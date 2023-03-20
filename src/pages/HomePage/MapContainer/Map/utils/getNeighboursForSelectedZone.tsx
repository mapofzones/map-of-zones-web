import { getZoneKey } from './getZoneKey';
import { MapLink, SelectedZoneKeyType } from '../Types';

export function getNeighboursForSelectedZone(
  selectedZoneKey: SelectedZoneKeyType,
  links: MapLink[]
) {
  const neighbours: Set<string> = new Set();
  if (selectedZoneKey) {
    for (let index = 0; index < links.length; index++) {
      const link = links[index];
      const linkSource = getZoneKey(link.source);
      const linkTarget = getZoneKey(link.target);
      if (linkSource === selectedZoneKey) {
        neighbours.add(linkTarget);
      }
      if (linkTarget === selectedZoneKey) {
        neighbours.add(linkSource);
      }
    }
  }
  return neighbours;
}
