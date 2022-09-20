import { useCallback, useEffect, useMemo } from 'react';

import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

export function useDefaultSearchParam<T extends string>(key: string, defaultValue?: T | undefined) {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const columnKey = search.get(key);

  const selectedColumnKey: T = useMemo(
    () => (columnKey as T) ?? defaultValue,
    [columnKey, defaultValue]
  );

  const setSelectedColumnKey = useCallback(
    (value: T | undefined, replace = false) => {
      if (!!value) {
        search.set(key, value);
      } else {
        search.delete(key);
      }
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
    [navigate, location.pathname, search, key]
  );

  useEffect(() => {
    if (!search.get(key) && defaultValue) {
      setSelectedColumnKey(defaultValue, true);
    }
  }, [search, key, defaultValue, setSelectedColumnKey]);

  return [selectedColumnKey, setSelectedColumnKey] as const;
}
