import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse, stringify } from 'querystringify';

const ORDER_SORT = {
  true: 'desc',
  false: 'asc',
};

export const useSorting = () => {
  const history = useHistory();
  const location = useLocation();

  const setSort = useCallback(
    newSort => {
      const search = parse(location.search);

      search.tableOrderBy = newSort.id;
      search.tableOrderSort = ORDER_SORT[newSort.isSortedDesc] || 'ask';

      if (location.search !== `?${stringify(search)}`) {
        history.push(`?${stringify(search)}`);
      }
    },
    [history, location.search],
  );

  const sort = useMemo(() => {
    const { tableOrderBy = 'totalIbcTxs', tableOrderSort = 'ask' } = parse(
      location.search,
    );

    return {
      tableOrderBy,
      tableOrderSort,
    };
  }, [location.search]);

  return [sort, setSort];
};
