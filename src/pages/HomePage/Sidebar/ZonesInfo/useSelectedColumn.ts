import { useEffect, useMemo } from 'react';

import { useSearchParams } from 'react-router-dom';

import { ColumnKeys } from 'pages/HomePage/Types';

export function useSelectedColumn() {
  const [search, setSearch] = useSearchParams();
  const columnKey = search.get('columnKey');

  useEffect(() => {
    if (!columnKey) {
      setSelectedColumnKey(ColumnKeys.IbcVolume);
    }
  }, [search]);

  const selectedColumnKey = useMemo(() => {
    return columnKey && Object.values(ColumnKeys).some((v) => v === columnKey)
      ? (columnKey as ColumnKeys)
      : ColumnKeys.IbcVolume;
  }, [columnKey]);

  const setSelectedColumnKey = (value: any) => {
    search.set('columnKey', value);
    setSearch(search);
  };

  return [selectedColumnKey, setSelectedColumnKey] as const;
}
