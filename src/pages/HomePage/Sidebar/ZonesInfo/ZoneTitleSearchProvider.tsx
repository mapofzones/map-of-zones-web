import { ReactNode, createContext, useContext } from 'react';

import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';

interface SearchApi {
  setSearchValue: (value: string) => void;
}

const SearchApiContext = createContext<SearchApi>({} as SearchApi);
const SearchContext = createContext<string>('');

export const useSearchApiState = () => useContext(SearchApiContext);
export const useSearchState = () => useContext(SearchContext);

export function ZoneTitleSearchProvider({ children }: { children: ReactNode }) {
  const [searchValue, setSearchValue] = useDefaultSearchParam('searchZone');

  return (
    <SearchApiContext.Provider value={{ setSearchValue }}>
      <SearchContext.Provider value={searchValue}>{children}</SearchContext.Provider>
    </SearchApiContext.Provider>
  );
}
