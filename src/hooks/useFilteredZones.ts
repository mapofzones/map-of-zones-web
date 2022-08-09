interface ZoneItemForFilter {
  name: string;
}

export function useFilteredZones<T extends ZoneItemForFilter>(
  zones: T[],
  filterValue?: string
): T[] {
  return filterValue
    ? zones?.filter((zone) => zone.name.toLowerCase().includes(filterValue.toLowerCase()))
    : zones;
}
