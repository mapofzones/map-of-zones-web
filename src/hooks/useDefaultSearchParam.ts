import { useCallback, useEffect, useMemo } from 'react';

import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

export function useDefaultSearchParam<T extends string>(key: string, defaultValue: T) {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const columnKey = search.get(key);

  const selectedColumnKey: T = useMemo(
    () => (columnKey as T) ?? defaultValue,
    [columnKey, defaultValue]
  );

  const setSelectedColumnKey = useCallback(
    (value: T, replace = false) => {
      search.set(key, value);
      navigate(
        {
          pathname: location.pathname,
          search: '?' + search.toString(),
        },
        {
          replace,
        }
      );
    },
    [search, key, navigate, location.pathname]
  );

  useEffect(() => {
    if (!search.get(key)) {
      setSelectedColumnKey(defaultValue, true);
    }
  }, [search, key, defaultValue, setSelectedColumnKey]);

  return [selectedColumnKey, setSelectedColumnKey] as const;
}
