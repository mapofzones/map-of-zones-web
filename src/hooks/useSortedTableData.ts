import { useEffect, useState } from 'react';

export function SortRow<T>(a: T, b: T, key: keyof T) {
  // equal items sort equally
  if (a[key] === b[key]) {
    return 0;
  }

  // nulls sort after anything else
  if (a[key] == null) {
    return 1;
  }
  if (b[key] == null) {
    return -1;
  }

  return a[key] < b[key] ? 1 : -1;
}

export function useSortedTableData<T>(data: T[] | undefined, sortingColumnKey: keyof T): T[] {
  const [sortedZones, setSortedZones] = useState<T[]>([]);

  useEffect(() => {
    const sortedData = data?.slice().sort((a, b) => SortRow(a, b, sortingColumnKey)) ?? [];
    console.log(data, sortedData);
    setSortedZones(sortedData);
  }, [data, sortingColumnKey]);

  return sortedZones;
}
