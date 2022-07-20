import { useCallback, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

export function useDefaultSearchParam<T extends string>(key: string, defaultValue: T) {
  const [search, setSearch] = useSearchParams();
  const columnKey = search.get(key);

  const selectedColumnKey: T = (columnKey as T) ?? defaultValue;

  const setSelectedColumnKey = useCallback(
    (value: T) => {
      search.set(key, value);
      setSearch(search);
    },
    [search, key, setSearch]
  );

  useEffect(() => {
    if (!search.get(key)) {
      setSelectedColumnKey(defaultValue);
    }
  }, [search, key, defaultValue, setSelectedColumnKey]);

  return [selectedColumnKey, setSelectedColumnKey] as const;
}
