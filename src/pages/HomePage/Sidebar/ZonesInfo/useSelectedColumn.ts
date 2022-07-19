import { useCallback, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { ColumnKeys } from 'pages/HomePage/Types';

export function useSelectedColumn() {
  const [search, setSearch] = useSearchParams();
  const columnKey = search.get('columnKey');

  const selectedColumnKey =
    columnKey && Object.values(ColumnKeys).some((v) => v === columnKey)
      ? (columnKey as ColumnKeys)
      : ColumnKeys.IbcVolume;

  const setSelectedColumnKey = useCallback(
    (value: ColumnKeys) => {
      search.set('columnKey', value);
      setSearch(search);
    },
    [search, setSearch]
  );

  useEffect(() => {
    if (!search.get('columnKey')) {
      setSelectedColumnKey(ColumnKeys.IbcVolume);
    }
  }, [search, setSelectedColumnKey]);

  return [selectedColumnKey, setSelectedColumnKey] as const;
}
