import { MapLinkNode } from '../Types';

export function getZoneKey(link: MapLinkNode | string) {
  return typeof link === 'string' ? link : link.zone;
}
