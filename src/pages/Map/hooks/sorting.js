import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse, stringify } from 'querystringify';

const SORT_ORDER = {
  true: 'desc',
  false: 'asc',
};

export const useSorting = () => {
  const history = useHistory();
  const location = useLocation();

  const setSort = useCallback(
    newSort => {
      const search = parse(location.search);

      search.orderBy = newSort.id;
      search.sortOrder = SORT_ORDER[newSort.isSortedDesc] || 'ask';

      history.push(`?${stringify(search)}`);
    },
    [history, location.search],
  );

  const sort = useMemo(() => {
    const { orderBy = 'totalIbcTxs', sortOrder = 'ask' } = parse(
      location.search,
    );

    return {
      orderBy,
      sortOrder,
    };
  }, [location.search]);

  return [sort, setSort];
};
