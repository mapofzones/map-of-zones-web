import { HoveredZoneKeyType, MapLink, SelectedZoneKeyType } from '../Types';
import { getZoneKey } from './getZoneKey';

export function isLinkRelatedToNode(
  nodeKey: SelectedZoneKeyType | HoveredZoneKeyType,
  link: MapLink
) {
  return !!nodeKey && (nodeKey === getZoneKey(link.source) || nodeKey === getZoneKey(link.target));
}
