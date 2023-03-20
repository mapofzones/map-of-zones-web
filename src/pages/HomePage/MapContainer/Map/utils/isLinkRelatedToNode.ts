import { getZoneKey } from './getZoneKey';
import { HoveredZoneKeyType, MapLink, SelectedZoneKeyType } from '../Types';

export function isLinkRelatedToNode(
  nodeKey: SelectedZoneKeyType | HoveredZoneKeyType,
  link: MapLink
) {
  return !!nodeKey && (nodeKey === getZoneKey(link.source) || nodeKey === getZoneKey(link.target));
}
