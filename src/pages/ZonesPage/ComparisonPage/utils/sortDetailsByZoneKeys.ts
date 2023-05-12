export function sortDetailsByZoneKeys<T extends { zone: string }>(
  zones: string[],
  mappedData: T[]
): T[] {
  return zones
    .map((zone) => mappedData.find((zoneDetails) => zoneDetails.zone === zone))
    .filter((zone): zone is T => zone !== undefined);
}
