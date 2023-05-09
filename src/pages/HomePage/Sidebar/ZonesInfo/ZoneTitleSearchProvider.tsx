import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

interface SearchApi {
  setSearchValue: (value: string) => void;
}

const SearchApiContext = createContext<SearchApi>({} as SearchApi);
const SearchContext = createContext<string>('');

export const useSearchApiState = () => useContext(SearchApiContext);
export const useSearchState = () => useContext(SearchContext);

const SEARCH_KEY = 'searchZone';

export function ZoneTitleSearchProvider({ children }: { children: ReactNode }) {
  const [search] = useSearchParams();
  const [searchValue, setSearchValue] = useState(search.get(SEARCH_KEY) ?? '');

  useEffect(() => {
    const url = new URL(window.location.toString());
    if (searchValue) {
      url.searchParams.set(SEARCH_KEY, searchValue);
    } else {
      url.searchParams.delete(SEARCH_KEY);
    }
    window.history.pushState(null, '', url.toString());
  }, [searchValue]);

  return (
    <SearchApiContext.Provider value={{ setSearchValue }}>
      <SearchContext.Provider value={searchValue}>{children}</SearchContext.Provider>
    </SearchApiContext.Provider>
  );
}
