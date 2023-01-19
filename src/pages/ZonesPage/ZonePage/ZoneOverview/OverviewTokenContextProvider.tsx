import { createContext, ReactNode } from 'react';

import {
  useZoneOverviewToken,
  ZoneOverviewTokenResult,
} from './ZoneOverviewToken/useZoneOverviewToken';

export const OverviewTokenContext = createContext<ZoneOverviewTokenResult>({
  data: undefined,
  loading: false,
});

function OverviewTokenContextProvider({ children }: { children: ReactNode }) {
  const { data, loading } = useZoneOverviewToken();

  return (
    <OverviewTokenContext.Provider
      value={{
        loading,
        data,
      }}
    >
      {children}
    </OverviewTokenContext.Provider>
  );
}

export default OverviewTokenContextProvider;
