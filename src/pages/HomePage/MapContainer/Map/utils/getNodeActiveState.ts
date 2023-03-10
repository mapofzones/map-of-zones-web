import { isNeighbor } from './isNeighbor';
import { HoveredZoneKeyType, MapLink, MapNode, SelectedZoneKeyType } from '../Types';

export function getNodeActiveState(
  selectedZoneKey: SelectedZoneKeyType,
  currentNode: MapNode,
  hoveredZoneKey: HoveredZoneKeyType,
  links: MapLink[]
) {
  const isSelectedZone = !!selectedZoneKey && currentNode.zone === selectedZoneKey;
  const isHoveredZone = !!hoveredZoneKey && currentNode.zone === hoveredZoneKey;
  const isFocusedZone = isSelectedZone || isHoveredZone; // SELECTED style -- opacity: border=1 (FF) background=0.1 (1A)
  const isNormal = !selectedZoneKey && !hoveredZoneKey; // NORMAL style -- opacity: border=0.6 (9A) background=0.1 (1A)
  const isSelectedNeighbor = isFocusedZone
    ? false
    : isNeighbor(selectedZoneKey, currentNode.zone, links);

  const isHoveredNeighbor =
    !!selectedZoneKey || isSelectedNeighbor
      ? false
      : isNeighbor(hoveredZoneKey, currentNode.zone, links);

  const isActive = !!isSelectedNeighbor || isHoveredNeighbor; // ACTIVE style -- opacity: border=0.6 (9A) background=0.1 (1A)
  const isFaded = !isNormal && !isFocusedZone && !isActive; // FADED style -- opacity: border=0.2 (33) background=0.05 (0D)
  return { isFaded, isFocusedZone, isSelectedZone, isNormal };
}
