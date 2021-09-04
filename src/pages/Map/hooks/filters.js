import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse, stringify } from 'querystringify';

export const useFilters = () => {
  const history = useHistory();
  const location = useLocation();

  const updateFilters = useCallback(
    newFilters => {
      let search = parse(location.search);

      const isFiltersEmpty = !Object.values(newFilters || {}).filter(Boolean)
        .length;

      if (isFiltersEmpty) {
        delete search.filterAmount;
        delete search.sortOrder;
        delete search.trendLine;
      } else {
        search = {
          ...search,
          ...(newFilters || {}),
        };
      }

      if (location.search !== `?${stringify(search)}`) {
        history.push(`?${stringify(search)}`);
      }
    },
    [history, location.search],
  );

  const filters = useMemo(() => {
    const { filterAmount, sortOrder, trendLine } = parse(location.search);

    return {
      filterAmount,
      sortOrder,
      trendLine,
    };
  }, [location.search]);

  return [filters, updateFilters];
};
