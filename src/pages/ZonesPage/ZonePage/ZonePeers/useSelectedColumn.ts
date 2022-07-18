import { useCallback, useEffect, useMemo } from 'react';

import { useSearchParams } from 'react-router-dom';

import { ColumnKeys } from './TableHeader/Types';

export function useSelectedColumn() {
  const [search, setSearch] = useSearchParams();
  const columnKey = search.get('columnKey');

  const selectedColumnKey = useMemo(() => {
    return columnKey && Object.values(ColumnKeys).some((v) => v === columnKey)
      ? (columnKey as ColumnKeys)
      : ColumnKeys.IbcVolumeReceived;
  }, [columnKey]);

  const setSelectedColumnKey = useCallback(
    (value: ColumnKeys) => {
      search.set('columnKey', value);
      setSearch(search);
    },
    [search, setSearch]
  );

  useEffect(() => {
    if (!search.get('columnKey')) {
      setSelectedColumnKey(ColumnKeys.IbcVolumeReceived);
    }
  }, [search, setSelectedColumnKey]);

  return [selectedColumnKey, setSelectedColumnKey] as const;
}
