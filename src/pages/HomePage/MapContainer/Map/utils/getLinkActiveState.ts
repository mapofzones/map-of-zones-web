import { isLinkRelatedToNode } from './isLinkRelatedToNode';
import { HoveredZoneKeyType, MapLink, SelectedZoneKeyType } from '../Types';

export function getLinkActiveState(
  selectedNodeKey: SelectedZoneKeyType,
  hoveredNodeKey: HoveredZoneKeyType,
  link: MapLink
) {
  const isActiveMode = !!selectedNodeKey || !!hoveredNodeKey;
  const isRelatedToSelectedZone = isLinkRelatedToNode(selectedNodeKey, link);
  const isRelatedToHoveredZone = !selectedNodeKey && isLinkRelatedToNode(hoveredNodeKey, link);
  const isRalatedToActiveZone = isRelatedToSelectedZone || isRelatedToHoveredZone;
  return { isActiveMode, isRalatedToActiveZone };
}
